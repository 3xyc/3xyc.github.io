import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";



var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
const width = dimension[0];
const height = dimension[1];



const svg = d3.select("#d3svg");
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

// Create SVG elements for links and nodes
const link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke", "#aaa")
  .attr("stroke-width", 2);

const node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
  .attr("r", 3)
  .attr("fill", "#000")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5);






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
}
