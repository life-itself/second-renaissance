import clientPromise from "../lib/mddb.mjs";
import matter from "gray-matter";
import { remark } from "remark";
import stripMarkdown from "strip-markdown";
import fs from "fs";
import * as path from "path";
import { writeFileSync } from "fs";

// source is text string from md file content
const extractDescription = async (source) => {
    const content = source
    const stripped = await remark()
      .use(stripMarkdown, {
        remove: ["heading", "list", "image", "html", "code"],
      })
      .process(content);
    if (stripped.value) {
        const description = stripped.value.toString().slice(0, 200);
        return description + "...";
    }
    return null;
  };

const getDescription = async (mdContentFile) => {
    // Read the md files and get the content
    const defaultText = "";
    if ( !fs.existsSync(path.resolve(mdContentFile))) {
        console.log(`Could not find file ${path.resolve(mdContentFile)}`)
        return defaultText.slice(0, 200);
    }
    const { content } = matter.read(mdContentFile);
    const description = await extractDescription(content);
    return description;
}

export default async function mapdata() {
    const mddb = await clientPromise;
    console.log("Generating Map Data Start....")
    const profileFiles = await mddb.getFiles({ folder: "ecosystem/cohere/profiles" });

    // Filter - only include files with x y coords
    const profilesToAddToMap = profileFiles.filter(({metadata}) => metadata.x && metadata.y )

    // Projection - create geoJSON features
    const points = profilesToAddToMap.map(({url_path, metadata }) =>
    {
        return {
            type: "Feature",
            properties: {
                url_path,
                ...metadata
            },
            geometry: {
                type: "Point", 
                coordinates: [metadata.x, metadata.y]
            },
        } 
    });

    // Now need to go get the description from the md files
    for ( const { properties } of points ) {
        // getDescription and add it to properties
        const description = await getDescription("./content/" + properties.url_path + ".md");
        properties.description = description;
        // handle path to image
        const imgSrc = properties.image;
        properties.image = imgSrc?.replaceAll("[[../../../", "/").replaceAll("]]", ""); 
    };

    const geoJSONData = {
        type: "FeatureCollection",
        features: points
    }
    const geoJSONStringified = JSON.stringify(geoJSONData, null, '\t')

//    console.log("GEOJSON data ===============================")
//    console.log(`const geoJSONData = ${geoJSONStringified}`);

    // Save geoJSON data to file
    writeFileSync("public/map/cohere_map_data.js", `const geoJSONData = ${geoJSONStringified}`);
    console.log("Map Data generated...");

    return;
}
  
//await mapdata();
//process.exit();
