const nodeMap = new Map();
const nodes = [];
const links = [];

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

    return {"links": links, "nodes": nodes}
}


export {create_hex_net};