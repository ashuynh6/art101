/* lab.js - This simple JavaScript/jQuery script appends new element to an output div
 * Requirements: jQuery must be loaded for this script to work.
 * Author : Ashley Huynh <asthhuyn@ucsc.edu>
 * Date : November 17 2023
 */
// cr : Lyssa Li - shift after every message with 'direction' and 'count'
var count = 0;

// create helper function to generate fake dialogue
function generateRandomText() {
  console.log("generateRandomText working");
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  if (count % 2==0) {
      var direction = "left";
  } else {
    var direction = "right";
  }
  // append a new div to our output div
  $("#output").append('<div class="' + direction + ' text"><p>' + newText + '</p></div>');
  // update count
  count = count + 1;
});