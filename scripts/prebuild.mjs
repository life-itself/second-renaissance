import sitemap from "./sitemap.mjs";
import search from "./search.mjs";
import mddb from "./mddb.mjs";
import mapdata from "./generateMapData.mjs";    

await mddb();
await Promise.all([sitemap(), search(), mapdata()]);

process.exit();
