import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Declare the chart dimensions and margins.
var canvas = document.getElementById('d3canvas')
var context = canvas.getContext("2d");
context.alpha = true;
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
const width = dimension[0];
const height = dimension[1];
canvas.width = width;
canvas.height = height;

const n = 3; // Number of hexagons along one dimension
const hexRadius = 30; // Radius of each hexagon

const nodes = [];
const links = [];
const nodeMap = new Map();

function add_node(key) {
    let node = {index: nodes.length, key};
    console.log("node: " + key + " added!")
    nodeMap.set(key, node);
    nodes.push(node);
}

function add_edge(source, target) {
    if (!nodeMap.has(source)) {
        console.log("src: " + source + " not found!")
        return
    }
    if (!nodeMap.has(target)) {
        console.log("target" + target + " not found!")
        return
    }
    links.push({source: nodeMap.get(source), target: nodeMap.get(target)});
    console.log("edge: " + source + "->" + target + " added")
}


function create_hex_net(size) {
    let n = 3 + size * 4
    let m = 4 + size * 4
    for (let lr = 0; lr < Math.ceil(n / 2); lr++) {
        for (let ud = 1; ud < m / 2; ud++) {
            console.log(lr + ":" + ud)
            if (lr === 0) {
                if (ud % 4 === 0) {

                } else if (ud % 4 === 1) {

                } else if (ud % 4 === 2) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                } else if (ud % 4 === 3) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                    add_edge((lr + ":" + ud), (lr + ":" + (ud - 1)))
                    add_edge((lr + ":" + -ud), (lr + ":" + -(ud - 1)))
                }
            } else if (lr % 2 === 0) {
                if (ud % 4 == 0) {

                } else if (ud % 4 == 1) {

                } else if (ud % 4 == 2) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                    add_node((-lr + ":" + ud))
                    add_node((-lr + ":" + -ud))

                    add_edge((lr + ":" + ud), ((lr - 1) + ":" + (ud - 1)))
                    add_edge((lr + ":" + -ud), ((lr - 1) + ":" + -(ud - 1)))
                    add_edge((-lr + ":" + ud), (-(lr - 1) + ":" + (ud - 1)))
                    add_edge((-lr + ":" + -ud), (-(lr - 1) + ":" + -(ud - 1)))

                } else if (ud % 4 == 3) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                    add_node((-lr + ":" + ud))
                    add_node((-lr + ":" + -ud))
                    if (ud < m / 2 - 1) {
                        add_edge((lr + ":" + ud), ((lr - 1) + ":" + (ud + 1)))
                        add_edge((lr + ":" + -ud), ((lr - 1) + ":" + -(ud + 1)))
                        add_edge((-lr + ":" + ud), (-(lr - 1) + ":" + (ud + 1)))
                        add_edge((-lr + ":" + -ud), (-(lr - 1) + ":" + -(ud + 1)))
                    }
                    add_edge((lr + ":" + ud), (lr + ":" + (ud - 1)))
                    add_edge((lr + ":" + -ud), (lr + ":" + -(ud - 1)))
                    add_edge((-lr + ":" + ud), (-lr + ":" + (ud - 1)))
                    add_edge((-lr + ":" + -ud), (-lr + ":" + -(ud - 1)))


                }
            } else if (lr % 2 === 1) {
                if (ud % 4 == 0) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                    add_node((-lr + ":" + ud))
                    add_node((-lr + ":" + -ud))

                    add_edge((lr + ":" + ud), ((lr - 1) + ":" + (ud - 1)))
                    add_edge((lr + ":" + -ud), ((lr - 1) + ":" + -(ud - 1)))
                    add_edge((-lr + ":" + ud), (-(lr - 1) + ":" + (ud - 1)))
                    add_edge((-lr + ":" + -ud), (-(lr - 1) + ":" + -(ud - 1)))
                } else if (ud % 4 == 1) {
                    add_node((lr + ":" + ud))
                    add_node((lr + ":" + -ud))
                    add_node((-lr + ":" + ud))
                    add_node((-lr + ":" + -ud))
                    if (ud === 1) {
                        add_edge((lr + ":" + ud), (lr + ":" + -ud))
                        add_edge((lr + ":" + -ud), (lr + ":" + ud))
                        add_edge((-lr + ":" + ud), (-lr + ":" + -ud))
                        add_edge((-lr + ":" + -ud), (-lr + ":" + ud))
                    } else {

                        add_edge((lr + ":" + ud), (lr + ":" + (ud - 1)))
                        add_edge((lr + ":" + -ud), (lr + ":" + -(ud - 1)))
                        add_edge((-lr + ":" + ud), (-lr + ":" + (ud - 1)))
                        add_edge((-lr + ":" + -ud), (-lr + ":" + -(ud - 1)))

                    }

                    if (ud < m / 2 - 1) {
                        add_edge((lr + ":" + ud), ((lr - 1) + ":" + (ud + 1)))
                        add_edge((lr + ":" + -ud), ((lr - 1) + ":" + -(ud + 1)))
                        add_edge((-lr + ":" + ud), (-(lr - 1) + ":" + (ud + 1)))
                        add_edge((-lr + ":" + -ud), (-(lr - 1) + ":" + -(ud + 1)))
                    }
                } else if (ud % 4 == 2) {

                } else if (ud % 4 == 3) {


                }
            }
        }
    }
}

create_hex_net(12)
console.log(nodeMap)
console.log(nodes)

const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-4))
      .force("link", d3.forceLink(links).strength(1).distance(30).iterations(10))
      .on("tick", ticked);

  const drag = d3.drag()
      .subject(({x, y}) => simulation.find(x - width / 2, y - height / 2, 40))
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);


  function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.beginPath();
    for (const d of links) {
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    }
    context.strokeStyle = "#aaa";
    context.stroke();
    context.beginPath();
    for (const d of nodes) {
      context.moveTo(d.x + 3, d.y);
      context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    }
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();
    context.restore();
  }

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

d3.select(context.canvas).call(drag).node();
