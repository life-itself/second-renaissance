import { useEffect, useRef } from "react"
import { clone } from "itemsjs/lib/helpers"
import { circularPack, getTreeData } from "lib/d3"
import { allTopics } from "contentlayer/generated"
import getProfiles from "../lib/db"

export default function CircularVis({ size = 700 }) {
    const svg = useRef(null)

    useEffect(async () => {
      const orgs = await getProfiles()
      // clone the orgs array to avoid conflicts
      const primaryTopic = clone(orgs);
      // Show orgs based on primary topic
      primaryTopic.filter((el) => el.topic.pop() && el.topic !== []);
      // generate the data for the visualization
      const treeData = getTreeData(primaryTopic, allTopics);

      circularPack(treeData, {
        svgRef: svg,
        label: (d, n) => [...d.data.title.split(/(?=[A-Z][a-z])/g)].join("\n"),
        title: (d) => d.data.title,
        width: size,
        height: size,
      });
    },[svg])

    return (
        <div id="chart" className="flex justify-center my-4">
            <svg ref={svg} />
        </div>
    )
}