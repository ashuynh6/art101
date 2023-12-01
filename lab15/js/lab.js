/* Author : Ashley Huynh <asthhuyn@ucsc.edu>
 * Date : December 4 2023
 */ 

$.ajax(
  {
    url: "https://pokeapi.co/api/v2/berry/{id or name}/",
    data: {
      id:1,
      name:"cheri",
      growth_time:3,
      max_harvest:5,
      natural_gift_power:60,
      size:20,
      smoothness:25,
      soil_dryness:15,
      name:"soft",
      url:"https://pokeapi.co/api/v2/berry-firmness/2/",
      potency:10,
      name:"spicy",
      url:"https://pokeapi.co/api/v2/berry-flavor/1/",
      name:"cheri-berry",
      url:"https://pokeapi.co/api/v2/item/126/",
      name:"fire",
      url:"https://pokeapi.co/api/v2/type/10/",
    },
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
    },
    error: function(){
      console.log("Error:", textStatus, errorThrown);
    }
  }
)

.done (
  function(result) {
    console.log("we are done"),
    console.log(result);
    $("#output").append(result[0]).question;
    $("#output").append(result[0]).answer;
  }
)

.fail ();

$("#activate").click(function(){
  
})