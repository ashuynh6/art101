/* lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 * Requirements: jQuery must be loaded for this script to work.Ashley Huynh <asthhuyn@ucsc.edu>
 * Author : Ashley Huynh <asthhuyn@ucsc.edu>
 * Date : November 13 2023
 */

// add bbutton to challenge section
$("#challenge").append("<button class='style' id='button-challenge'>Click Here for  a Surprise!</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add the "special" class to the selection
  $("#challenge").toggleClass("special");
});