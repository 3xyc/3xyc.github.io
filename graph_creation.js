function add_node(key) {
    let node = {index: nodes.length, key};
    if (nodeMap.has(key)) {
        console.log("node: " + key + " already created!")
        return
    }
    console.log("node: " + key + " added!")
    nodeMap.set(key, node);
    nodes.push(node);
}

function add_edge(source, target) {
    if (!nodeMap.has(source)) {
        console.log(nodeMap)
        console.log("edge: " + source + "->" + target + "source not contained")
    }
    if (!nodeMap.has(target)) {
        console.log(nodeMap)
        console.log(" edge: " + source + "->" + target + " target not contained")
    }
    links.push({source: nodeMap.get(source), target: nodeMap.get(target)});
    console.log("edge: " + source + "->" + target + " added")
}

const nodeMap = new Map();
const nodes = [];
const links = [];


export function create_hex_net(size) {
    // reset arrays and maps
    nodeMap.clear()
    nodes.splice(0, nodes.length)
    links.splice(0, nodes.length)

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

function create_hex_ball_contour(size, depth = 0, start_past_iteration = 0, target_node_count = 6, node_count = 0) {

    if (depth > size) {
        return
    }
    console.log(depth)
    console.log("start_past_iteration: " + start_past_iteration)
    console.log("target_node_count: " + target_node_count)
    console.log("node_count: " + node_count)


    let i = start_past_iteration
    for (let j = node_count; j < target_node_count; j++) {
        add_node(j)

        //Build Flat Tops of Roof
        if (depth % 2 === 0) {
            if (true) {
                if (j > 0) {
                    add_edge(j, j - 1)
                }
                if (j === target_node_count - 1) {
                    add_edge(j, node_count)
                }
            }
        }
        console.log(depth)
        if (depth % 2 === 1) {
            console.log(j, i)
            add_edge(j, i)
            i++;
            add_edge(j, i)
        }

    }
    let new_nodes_next_iteration = target_node_count - node_count
    if (depth % 2 === 0) {
        new_nodes_next_iteration = 6 * 2 + Math.floor((depth + 1) / 2) + node_count - start_past_iteration
    }

    create_hex_ball_contour(size, depth + 1, start_past_iteration = node_count, target_node_count = target_node_count + new_nodes_next_iteration, node_count = target_node_count)

}


function perform_move(pos, move) {
    console.log(move)
    switch (move) {
        case "RD":
            return [pos[0] + 1, pos[1] - 1]
        case "DD":
            return [pos[0], pos[1] - 2]
        case "LD":
            return [pos[0] - 1, pos[1] - 1]
        case "LU":
            return [pos[0] - 1, pos[1] + 1]
        case "UU":
            return [pos[0], pos[1] + 2]
        case "RU":
            return [pos[0] + 1, pos[1] + 1]
    }
}

export function create_hex_ball(size) {
    // reset arrays and maps
    nodeMap.clear()
    nodes.splice(0, nodes.length)
    links.splice(0, nodes.length)

    let pos = [0, 2]
    let vertical_move_index = 0
    let running = true;
    const moves = ["RD", "DD", "LD", "LU", "UU", "RU"]
    while (running) {

        // add start node#
        add_node(String(pos))
        if (vertical_move_index > 0) {
            add_edge(String(pos), String(perform_move(pos, "LD")))
        }
        for (let i = 0; i < moves.length; i++) {
            pos = perform_move(pos, moves[i])
            add_node(String(pos))
            add_edge(String(pos), String(perform_move(pos, moves[(i + 3) % 6])))

            for (let j = 0; j < vertical_move_index; j++) {
                console.log("perform middle moves")
                pos = perform_move(pos, (moves[(i + 1)% 6]))
                add_node(String(pos))
                add_edge(String(pos), String(perform_move(pos, moves[(i + 1 + 3) % 6])))
                // add edges to previously generate nodes
                add_edge(String(pos))


                pos = perform_move(pos, (moves[i]))
                add_node(String(pos))
                add_edge(String(pos), String(perform_move(pos, moves[(i + 3) % 6])))
            }
        }
        vertical_move_index++;
        pos = perform_move(pos, "UU")
        add_node(String(pos))
        add_edge(String(pos), String(perform_move(pos, "DD")))
        pos = perform_move(pos, "RU")



        if (vertical_move_index > 1) {
            running = false;
        }
    }

    return {"links": links, "nodes": nodes}
}

