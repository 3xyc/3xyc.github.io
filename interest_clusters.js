import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

var n = 100
d3.json("res/data/interests.json").then(function (jsonData) {
    var nodes = jsonData.interests[0]; // Use the first array inside interests
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
        //.force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 1 / 3))
        .force("coding", d3.forceManyBody().strength((d, i) => d.group === "coding" ?  10 : 10))
        .force("music", d3.forceManyBody().strength((d, i) => d.group === "music" ? 10 : 10))
        .force("data", d3.forceManyBody().strength((d, i) => d.group === "data" ? 10 : 10))
        .on("tick", ticked);


    d3.select(context.canvas)
        .on("touchmove", event => event.preventDefault())
        .on("pointermove", pointermoved);

    function pointermoved(event) {
        const [x, y] = d3.pointer(event);
        const d = nodes[0];
        d.fx = x - width / 2;
        d.fy = y - height / 2;
    }

    function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        for (let i = 1; i < nodes.length; ++i) {
            const d = nodes[i];
            context.beginPath();
            context.moveTo(d.x + d.r, d.y);
            context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
            context.fillStyle = d.c;
            context.fill();

            context = canvas.getContext("2d")

            context.font = '16pt Arial';
            context.textAlign = 'center';

            context.fillStyle = 'black';
            context.fillText(d.id, d.x, d.y);
        }
        context.restore();
    }
})
