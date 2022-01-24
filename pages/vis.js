import React, { useEffect, useRef } from "react";
import { getOrganizations } from "lib/db.js";
import { drawChart } from "lib/d3";

export default function Page({ orgs }) {
  const svg = useRef(null)

  useEffect(() => {
    drawChart(svg, orgs)
  }, [svg, orgs])

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-16 mb-8 text-4xl">Mapping the Space</h1>
        <div id="chart" className="relative mb-8">
          <svg ref={(el) => (svg = el)} />
          <div
            id="tooltip"
            className="absolute w-[fit-content] max-w-[200px] font-bold text-sm p-2.5 opacity-0 rounded hidden"
          />
          <div id="legend-container" className="grid gap-4 text-sm font-bold">
            <div className="grid gap-2 lg:grid-flow-col lg:auto-cols-max">
              <span className="min-w-[100px]">Labels:</span>
              <label className="flex items-center text-[12px]">
                <input
                  id="labels-checkbox"
                  type="checkbox"
                  className="text-[#f0ca5e] focus:ring-[#f0ca5e] transition duration-200 mr-2"
                />
                Show all labels
              </label>
            </div>
            <div className="grid gap-2 lg:grid-cols-[auto,1fr]">
              <span className="min-w-[100px]">Legend:</span>
              <div id="color-legend" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const orgs = await getOrganizations()
  return {
    props: {
      orgs,
    }
  }
}