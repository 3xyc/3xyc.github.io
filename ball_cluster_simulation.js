import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
var n = 100
var data =
    Array.from({length: n}, (_, i) =>
        ({group: i && (i % 10 + 1), x:i*75, y:i*75, r: 20, c:"red"}));

var nodes =  [
    {id: "Java", x:500, y:600, r:20, c:"red"},
    {id: "Python", x:100, y:100, r:20, c:"blue"},
    ]

nodes =data

// Declare the chart dimensions and margins.
var canvas = document.getElementById('d3canvas')
var context = canvas.getContext("2d");
context.alpha = true;
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];

const width = dimension[0];
const height = dimension[1];
canvas.width = width;
canvas.height = height;

const simulation = d3.forceSimulation(nodes)
      .alphaTarget(0.3) // stay hot
      .velocityDecay(0.1) // low friction
      .force("x", d3.forceX().strength(0.005))
      .force("y", d3.forceY().strength(0.005))
      .force("collide", d3.forceCollide().radius(d => d.r + 1).iterations(3))
      .force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 3))
      .on("tick", ticked);


 d3.select(context.canvas)
      .on("touchmove", event => event.preventDefault())
      .on("pointermove", pointermoved);

  function pointermoved(event) {
    const [x, y] = d3.pointer(event);
    const d = nodes[0];
    d.fx = x - width / 2;
    d.fy = y - height / 2;

    console.log(nodes[0].x, nodes[1].x);
  }

  function ticked() {
      console.log(nodes[0].fx)
    context.clearRect(0, 0, width,height);
    context.save();
    context.translate(width / 2, height / 2);
    for (let i = 1; i < nodes.length; ++i) {
      const d = nodes[i];
      context.beginPath();
      context.moveTo(d.x + d.r, d.y);
      context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
      context.fillStyle = d.c;
      context.fill();
    }
    context.restore();
  }
