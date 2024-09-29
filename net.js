import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import {create_hex_net, create_hex_ball} from "./graph_creation.js"

var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
const width = dimension[0];
const height = dimension[1];


const svg = d3.select("#d3svg");

//const hex_net = create_hex_net(12)
const hex_net = create_hex_ball(0);
const graph = {"nodes": hex_net["nodes"], "links": hex_net["links"]}

// Create SVG elements for links and nodes
const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 2);

const node = svg.selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", "node")
    .append("circle")
    .attr("r", 3)
    .attr("fill", "#000")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5);
const text = svg.selectAll("g").append("text")
    .text(function (d) {
        return d.key;
    });

console.log(node)

const simulation = d3.forceSimulation(graph.nodes)
    .force("charge", d3.forceManyBody().strength(-5))
    .force("link", d3.forceLink(graph.links).strength(1).distance(20).iterations(10))
    .force("center", d3.forceCenter(200, 400).strength(1))
    .on("tick", ticked);
console.log(simulation.nodes())

// Update the ticked function to position the nodes and links
function ticked() {
    // Update link positions
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    // Update node positions
    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    text.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

//node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });


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

const drag = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);

// Add a drag behavior.
node.call(drag);

