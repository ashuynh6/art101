/* Lab 16: JSON and APIs
 * Ashley Huynh <asthhuyn@ucsc.edu>
 * December 8 2023
 */ 

var proxy = "https://cors-anywhere.herokuapp.com/"
var latesNum;

var initialAjax = {
    url: proxy+"https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data);
      latesNum = data.num;
      displayComic(data);
    },
}

function displayComic(data) {
  $("#output").append(`<img id='comic' src="${data.img}" />`);
}

$.ajax(initialAjax);