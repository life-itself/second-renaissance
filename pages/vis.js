import crypto from 'crypto'
import React from 'react'
import * as d3 from 'd3'
import {barycentric, ternaryPlot} from 'd3-ternary'
import { useEffect } from 'react'
import { getOrganizations } from "../lib/db.js"


export default function Page({ orgs }) {
  const svg = React.useRef(null)

  React.useEffect(() => {
    drawChart(svg, orgs)
  }, [svg, orgs])

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-16 mb-8 text-4xl">Mapping the Space</h1>
        <div id="chart">
          <svg ref={svg} />
        </div>
      </div>
    </>
  )
}

// A merger of learnings from 
// https://observablehq.com/@julesblm/usda-soil-textural-triangle?collection=@julesblm/ternary-plots
// ...
/** Draw a ternary plot in d3
  * @param plot: a result of calling ternaryPlot
  *
  * from https://observablehq.com/@julesblm/d3-ternary?collection=@julesblm/ternary-plots#drawTernaryPlot
  **/
function drawChart(svgRef, orgs) {
  const labels = [
    "Inner Change",
    "Cultural Change",
    "Systems Change"
  ]

  const height = 500
  const width = 500
  const radius = height/2

  const dotRadius = 4

  const dimNames = [ 'inner', 'cultural', 'systems' ]

  // data
  const sampleData = [
    { title: 'a', inner: 1, cultural: 1, systems: 20 },
    { title: 'b', inner: 20, cultural: 1, systems: 1 },
  ]
  // const data = sampleData
  const data = orgs.slice(0, 33).map((org) => {
    // let's perturb the values a tiny bit in order to avoid dots overlapping
    for(const dim of dimNames) {
      // org[dim] = parseFloat(org[dim]) + (Math.random() * 2 * dotRadius / height)
      // perturb location based on name (so pseudo-random but repeatable so diagram looks same time after time)
      const randomish = 0.2 + parseInt(crypto.createHash('md5').update(org.name).digest('hex'), 16) / Math.pow(2, 128) 
      org[dim] = parseFloat(org[dim]) + (randomish * 4 * dotRadius / height)
    }
    return org
  })

  const normalBarycentric = barycentric(data)
  const someTernaryPlot = ternaryPlot(normalBarycentric)
    .radius(radius)
    .labels(labels)

  const svg = d3.select(svgRef.current)
 
  // HACK multiply by 1.2 as otherwise part of diagram cut off
  svg
    .attr("width", width * 1.2)
    .attr("height", height * 1.2)

  // const yOffset = height / 2 + plot.radius() / 4
  const yOffset = 50

  const chart = svg
    .append("g")
    .attr("transform", `translate(${width / 2 + yOffset} ${height / 2 + yOffset})`)
    .attr("font-family", "sans-serif")
    .attr("id", "chart")

  const defs = chart.append("defs");

  const clipPath = defs
    .append("clipPath")
    .attr("id", "trianglePath")
    .append("path")
    .attr("d", someTernaryPlot.triangle());

  // ==========
  // Label dots and their labels

  const labelPoints = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
  ].map((d) => {
    const [x,y] = someTernaryPlot(d)
    return { x, y }
  })

  const labelDots = chart
    .append("g")
    .attr("class", "data")
    .selectAll("circle")
    .data(labelPoints)
    .join("circle")
    .attr("r", 10)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("fill", "red")

  // initial triangle
  // For now let's hide this ...
  // and instead draw a point for each core item
//  const trianglePath = chart
//    .append("path")
//    .attr("d", someTernaryPlot.triangle())
//    .attr("fill", "transparent")
//    .attr("stroke", "black")
//    .attr("title", "Initial untransformed triangle")
//    .attr("stroke-width", 2);

  const axisLabelsGroups = chart
    .append("g")
    .attr("class", "axis-labels")
    .append("g")
    .attr("class", "labels")
    .attr("font-size", 12)

  axisLabelsGroups.call(axisLabels, someTernaryPlot.axisLabels());

//  const gridLinesPaths = someTernaryPlot
//    .gridLines()
//    .map((axisGrid) => axisGrid.map(d3.line()).join(" "));
//
//  const gridGroup = chart
//    .append("g")
//    .attr("class", "grid")
//    .call(grid, gridLinesPaths);
//
//  const axisTicksGroups = chart
//    .append("g")
//    .attr("class", "ternary-ticks")
//    .attr("font-size", 10)
//    .selectAll("g")
//    .data(someTernaryPlot.ticks())
//    .join("g")
//    .attr("class", "axis-ticks")
//    .call(ticks);

  const ternaryData = data.map((d) => {
    const [x, y] = someTernaryPlot([d.inner, d.cultural, d.systems]);
    return { x, y, ...d };
  });

  // data
  const dots = chart
    .append("g")
    .attr("class", "data")
    // cut off dots at edge of triangle
    // actually don't want this as a lot of stuff is on a boundary
    // .attr("clip-path", "url(#trianglePath)")
    .selectAll("circle")
    .data(ternaryData)
    .join("circle")
    .attr("r", 3)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("fill", "#444")

  dots.append("title").text(
    (d) => `${d.name}`
  );

}

const grid = (g, gridLines) => g.selectAll("path")
  .data(gridLines)
  .join(
    enter => enter.append("path")
        .attr("d", d => d)
        .attr("stroke", "#e3e3e3")
        .attr("stroke-width", (d, i) => i & 1 ? 1 : 2),
    update => update.attr('d', d => d)
    // theres no exit, lines are only drawn upto 'initial' triangle bounds
  )

const epsilon = 0.0001
const ticks = g =>
  g
    .selectAll("g")
    .data(d => d, d => d.tick)
    .join(
      enter => {
        const tickGroups = enter
          .append("g")
          .attr("class", "tick")
          .attr("transform", tick => `translate(${tick.position})`);

        tickGroups
          .append("text")
          .attr("text-anchor", tick => tick.textAnchor)
          .attr("transform", tick => `rotate(${tick.angle})`)
          .attr(
            "dx",
            tick => (-tick.size - 5) * (tick.textAnchor === "start" ? -1 : 1)
          )
          .attr("dy", ".5em")
          .text(tick => tick.tick);

        tickGroups
          .append("line")
          .attr("transform", d => `rotate(${d.angle + 90})`)
          .attr(
            "y2",
            tick => tick.size * (tick.textAnchor === "start" ? -1 : 1)
          )
          .attr("stroke", "grey");

        return tickGroups;
      },
      update => update.attr("transform", tick => `translate(${tick.position})`),
      exit => exit.attr("opacity", epsilon).remove()
    )

const axisLabels = (g, labels) =>
  g
    .selectAll("text")
    .data(labels, d => d.label)
    .join(
      enter =>
        enter
          .append("text")
          .attr("dy", (d, i) => (i === 2 ? "-0.5em" : ".5em"))
          .attr(
            "transform",
            (label, i) => `translate(${label.position})rotate(${label.angle})`
          )
          .attr("text-anchor", "middle")
          .text(label => label.label),
      update =>
        update.attr(
          "transform",
          (label, i) => `translate(${label.position})rotate(${label.angle})`
        )
    )

export async function getStaticProps(context) {
  const orgs = await getOrganizations()
  return {
    props: {
      orgs,
    }
  }
}
