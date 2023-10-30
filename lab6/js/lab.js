/*
 * Ashley Huynh <asthhuyn@ucsc.edu>
 * October 29 2023
 */

// myTransport Variables
myTransport = ["legs", "bus", "car"];


// myMainRide Object
myMainRide = {
        make : "Lexus",
        model : "RC",
        color : "atomic silver",
        year : 2019,
        age : function() {
            return 2023 - this.year;
        }
}

// myTransport Output
document.writeln("Getting around: " + myTransport + "<br>");

// myMainRide Output
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");