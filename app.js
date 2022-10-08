// app.js
//test
import { ForceSimulation } from "./@livereader/graphly-d3";
import "./@livereader/graphly-d3/style.css";
import Hexagon from "./hexagon";

const mySVG = document.getElementById("mySVG");
const simulation = new ForceSimulation(mySVG);
simulation.templateStore.add("hexagon", Hexagon);
console.log("test")
const graph = {
	nodes: [
		{
			id: "node1",
			shape: {
				type: "hexagon",
				scale: 1,
			},
			x: -150,
			y: 30,
		},
		{
			id: "node2",
			shape: {
				type: "hexagon",
				scale: 1,
			},
			x: 150,
			y: -30,
		},
	],
	links: [
		{
			source: "node1",
			target: "node2",
			directed: true,
			strength: "weak",
		},
	],
};

simulation.render(graph);
