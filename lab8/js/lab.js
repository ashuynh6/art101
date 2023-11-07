// index.js - purpose and description here
// Author: Ashley Huynh <asthhuyn@ucsc.edu>
// Date: November 6 2023

function multiply(a) {
  return a * 10;
}

// test function
console.log("4 x 10 = ", multiply(4));
console.log("7 x 10 = ", multiply(7));
console.log("11 x 10 = ", multiply(11));

a = [4, 7, 11]
console.log("My array", a);

function add5(a) {
  return a + 5;
}

var mapResults = '<p> This is my array: </p>' + a + '<p>This is my array being multiplied by 10: </p>' + a.map(multiply) + '<p>This is my array added by 5: </p>' + a.map((function add5(a) {return a + 5;}));

console.log("Addition of array:", mapResults);

var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResults;