import { useEffect, useRef } from "react"
import { clone } from "itemsjs/lib/helpers"
import { circularPack, getTreeData } from "lib/d3"
import topicsRaw from "data/topic"

export default function CircularVis({ orgs, size = 700 }) {
    const svg = useRef(null)

    useEffect(() => {
      // clone the orgs array to avoid conflicts
      const primaryTopic = clone(orgs);
      // Show orgs based on primary topic
      primaryTopic.filter((el) => el.topic.pop() && el.topic !== []);
      // generate the data for the visualization
      const treeData = getTreeData(primaryTopic, topicsRaw);

      circularPack(treeData, {
        svgRef: svg,
        label: (d, n) => [...d.data.name.split(/(?=[A-Z][a-z])/g)].join("\n"),
        title: (d) => d.data.name,
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