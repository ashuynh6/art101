// index.js - purpose and description here
// Author: Your Name
// Date:

// if the js is working, it will say so in console
console.log("JS is working");
// if still not working, it's smt else

$(document).ready(function(){
  // if button is activated, it will say so in console
  console.log("Button clicked!");
  $("#my-button").append("<button>Press Me</button>")
  $("#my-button").click(function(){
  var name = prompt("Name please:");
  console.log("Prompt returned: " + name);
  $("#title").html("Hello " + name + "!");
})
});

// alt to var, you can use newText
// as follows --> newText = "Hello " + name + "!"