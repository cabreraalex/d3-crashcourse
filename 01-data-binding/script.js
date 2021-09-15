import * as d3 from "d3";

// Problem 1
let textDiv = document.querySelector("#text-div");
console.log("div");

d3.select(textDiv).append("h1").text("Hello World!");

// Problem 2
let table = await d3.csv("../beer.csv", d3.autoType);
let firstFive = table.sort((a, b) => a.brewery_id - b.brewery_id).slice(0, 5);
console.log("script", table);

let dataDiv = document.querySelector("#data-div");

d3.select(dataDiv)
  .selectAll("p")
  .data(firstFive)
  .enter()
  .append("p")
  .text((d) => d.name);

// Problem 3
let barDiv = document.querySelector("#bar-div");

d3.select(barDiv)
  .append("svg")
  .selectAll("brewery")
  .data(firstFive)
  .enter()
  .append("rect")
  .attr("width", 10)
  .attr("height", (d) => d.ibu)
  .attr("x", (d, i) => i * 11);
