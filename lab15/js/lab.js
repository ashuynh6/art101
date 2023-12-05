/* Author : Ashley Huynh <asthhuyn@ucsc.edu>
 * Date : December 4 2023
 */ 

const ENDPOINT = "https://icanhazdadjoke.com/";

// attach eventlistener
$("#activate").click(function(){
  console.log("Click");
  // ajax
  $.ajax({
    "url": ENDPOINT,
    "type": "GET",
    "dataType": "json",
    "success": function(results){
      console.log(results);
      // extract results
      jokeText = results.joke;
      // add to output div
      $("#output").append("<p>" + jokeText);
    },
    "error": function(){
      
    },
  })
})