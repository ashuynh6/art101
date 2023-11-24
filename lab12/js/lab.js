/* Author : Ashley Huynh <asthhuyn@ucsc.edu>
 * Date : November 24 2023
 */

function sortingHat(str){
  len = str.length;
  mod = len % 8;
  if (mod == 0) {
    return "Hello Kitty! She is very energetic, bright, and friendly!<div class='kitty'></div>"
  }
  else if (mod == 1) {
    return "Pochacco! He is sporty and playful!<div class='poc'></div>"
  }
  else if (mod == 2) {
    return "Kerropi! He is cheerful, optimistic, and atheltic!<div class='ker'></div>"
  }
  else if (mod == 3) {
    return "Pompompurin! He is laidback and can make friends with anyone!<div class='pom'></div>"
  }
  else if (mod == 4) {
    return "Cinnamoroll! She is quite shy but very friendly!<div class='cin'></div>"
  }
  else if (mod == 5) {
    return "My Melody! She is kind, honest, and sociable!<div class='mel'></div>"
  }
  else if (mod == 6) {
    return "Kuromi! She is rebellious, mischevious, and free-spirited!<div class='kuro'></div>"
  }
  else if (mod == 7) {
    return "Gudetama! They are apathetic, solitary, and love to sleep!<div class='gude'></div>"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>You are " + house + "<p>";
  document.getElementById("output").innerHTML = newText;
});

