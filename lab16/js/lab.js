/* Lab 16: JSON and APIs
 * Ashley Huynh <asthhuyn@ucsc.edu>
 * December 8 2023
 */ 

console.log("JS loaded");

const ENDPOINT = "https://xkcd.com/info.0.json";

// attach eventlistener
$("#activate").click(function(){
  console.log("Click");
  // ajax
  const comicObj = {
    url: ENDPOINT,
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError,
  }
    $.ajax(comicObj);
})

function ajaxSuccess(comicObj){
  console.log("Here's what I got:", comicObj);
  const title = comicObj.title;
  const alt = comicObj.alt;
  const img = comicObj.img;
  // jQuery
  $("#output").append("<h2>" + comicObj.title + "</h2>");
  $("#output").append("<img id='comic' src='" + comicObj.img + "'/>");
  $("#output").append("<p>" + comicObj.alt + "</p>");
}
function ajaxError(request,error){
  console.log("Oops:", request, error);
}