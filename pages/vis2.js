import React from 'react'
import * as d3 from 'd3'
import { useEffect } from 'react'
import { getOrganizations } from "../lib/db.js"
import topicsRaw from '../data/topic'

export default function Page({ orgs }) {
  const svg = React.useRef(null)

  React.useEffect(() => {
    // d3 hierarcy structure e.g. result of d3.stratify
    const treeData = getTreeData(orgs, topicsRaw)
    const root = d3.hierarchy(treeData);
    const nodes = root.descendants();
    const links = root.links();

    // drawChart(svg, treeData)
    drawChart2(svg, nodes, links)
    // ForceGraph({ svgRef: svg, nodes, links })
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

export async function getStaticProps(context) {
  const orgs = await getOrganizations()
  return {
    props: {
      orgs,
    }
  }
}

function getTreeData(orgs, topics) {
    const example = `id,parentId,Xsize,img
cars,
owned,cars
traded,cars
learned,cars
pilot,owned,40
325ci,owned,40
accord,owned,20
chevette,traded,10
odyssey,learned,20
maxima,learned,10`
  // return d3.stratify()(d3.csvParse(example));
  
  let preppedData = [
    { id: 'root', parentId: null, name: 'Social Change' }
  ]
  for(const topic of topics) {
    preppedData.push({
      parentId: 'root',
      ...topic
    })
  }
  for(const org of orgs) {
    if (org.topic && org.topic[0]) {
      preppedData.push({
        parentId: org.topic[0],
        ...org
      })
      if (org.topic[1]) {
        preppedData.push({
          parentId: org.topic[1],
          ...org
        })
      }
    }
  }

  const treeData = d3.stratify()
    .id(d => d['id'])
    .parentId(d => d['parentId'])
    (preppedData)
  return treeData
}

/**
  * treeData is d3.stratify() data
  *
// Basic model from https://bl.ocks.org/denjn5/6914f73f8bc3f009a875fa2bd11f81d8
  **/
function drawChart(svgRef, treeData) {
  const width = 500
  const height = 500

  // Prepare our physical space
  const svgNode = d3.select(svgRef.current)
    .attr('width', width)
    .attr('height', height)
    .append("g")

  // Declare d3 layout
  const vLayout = d3.forceSimulation()
    .force('link', d3.forceLink().id(function (d) { return d.id; }))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  // Layout + Data
  const root = d3.hierarchy(treeData);
  const nodes = root.descendants();
  const links = root.links();

  const vLines = svgNode.selectAll('line')
    .data(links)
    .enter()
    .append('line');
  const vCircles = svgNode.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
      .attr('r', 7);

  // Draw on screen
  vLayout.nodes(nodes).on('tick', ticked);
  vLayout.force('link').links(links);

  // Animate on entry.
  function ticked() {
    vLines.attr('x1', function (d) { return d.source.x; })
        .attr('y1', function (d) { return d.source.y; })
        .attr('x2', function (d) { return d.target.x; })
        .attr('y2', function (d) { return d.target.y; });

    vCircles.attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });
  }
}

// A nice hierarchical force directed node vis ...
// Inspiration from https://observablehq.com/@sandravizmad/force-directed-layout
// TODO: (?) images on nodes etc from http://bl.ocks.org/eesur/be2abfb3155a38be4de4
function drawChart2(svgRef, nodes, links) {
  const width = 800
  const height = 500

  const svg = d3.select(svgRef.current)
    .attr('width', width * 1.2)
    .attr('height', height * 1.2)
    // .attr("viewBox", [-width/2, -height/2, width, height]);

  const scale = {
    c: d3.scaleLinear()
        .domain([0, d3.max(nodes, d => d.height)])
        .range(['#0C6359', '#1ce3cd']),
    r: d3.scaleLinear()
        .domain([0, d3.max(nodes, d => d.height)])
        .range([2, 30])
  }

  // original
//  const simulation = d3.forceSimulation(nodes)
//      .force("link", d3.forceLink(links)
//             .id(d => d.id)
//             .distance(8)
//             .strength(2))
//      .force("charge", d3.forceManyBody().strength(-3))
//      .force("x", d3.forceX())
//      .force("y", d3.forceY());

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
          .id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg.append("g")
      .attr("stroke", "black")
      .attr("stroke-width", 0.4)
      .attr("stroke-opacity", 0.8)
    .selectAll("line")
    .data(links)
    .join("line")
      .attr("stroke", d => d.target.children ? null : "#f20666")
      .attr("stroke-width", d => d.target.children ? null : 0.12);

  const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("fill", d => scale.c(d.height))
      .attr("r", d => scale.r(d.height))
      .call(drag(simulation));

  // HACK: TODO some kind of bug means that data is stored 2 levels down
  // console.log(node)
  node.append("title")
      .text(d => d.data.data.name);

  simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  });

  // invalidation.then(() => simulation.stop());

  // helper functions
  //
  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  } 
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/force-directed-graph
function ForceGraph({
  svgRef,
  nodes, // an iterable of node objects (typically [{id}, …])
  links // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeId = d => d.id, // given d in nodes, returns a unique identifier (string)
  nodeGroup, // given d in nodes, returns an (ordinal) value for color
  nodeGroups, // an array of ordinal values representing the node groups
  nodeTitle, // given d in nodes, a title string
  nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  nodeStrength,
  linkSource = ({source}) => source, // given d in links, returns a node identifier string
  linkTarget = ({target}) => target, // given d in links, returns a node identifier string
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkStrokeLinecap = "round", // link stroke linecap
  linkStrength,
  colors = d3.schemeTableau10, // an array of color strings, for the node groups
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  invalidation // when this promise resolves, stop the simulation
} = {}) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
  const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({id: N[i]}));
  links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", forceNode)
      .force("center",  d3.forceCenter())
      .on("tick", ticked);

  // const svg = d3.create("svg")
  const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", linkStroke)
      .attr("stroke-opacity", linkStrokeOpacity)
      .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
      .attr("stroke-linecap", linkStrokeLinecap)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("fill", nodeFill)
      .attr("stroke", nodeStroke)
      .attr("stroke-opacity", nodeStrokeOpacity)
      .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", nodeRadius)
      .call(drag(simulation));

  if (W) link.attr("stroke-width", ({index: i}) => W[i]);
  if (G) node.attr("fill", ({index: i}) => color(G[i]));
  if (T) node.append("title").text(({index: i}) => T[i]);
  if (invalidation != null) invalidation.then(() => simulation.stop());

  function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  function ticked() {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  }

  function drag(simulation) {    
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), {scales: {color}});
}
