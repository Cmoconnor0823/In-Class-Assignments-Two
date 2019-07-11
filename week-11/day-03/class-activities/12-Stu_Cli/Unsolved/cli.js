//var fs = require("fs");

// Write code here to parse command line arguments 
//and store them into variables
var searchType = process.argv[2];
var searchThis = process.argv.slice(3).join(" ");

console.log("searchThis: " + searchThis);
console.log("searchType: " + searchType);

//call function to show results
tvSearch(searchType, searchThis);

function tvSearch(searchType, searchThis) {
    switch (searchType) {
        case "show":
            showActorInfo(searchThis);
            console.log(searchThis + "in switch case");
            break;
        case "actor":
            showShowInfo(searchThis);
            break;
        default:
            console.log("Invalid Search. \nPlease input first either 'show' or 'actor' \nand then the title of the show or the name of the actor \nyou wish to search.")
    }
}

//fs how do i use fs in order to call the functions

// Add code to print whether the user is searching 
//for an actor or tv show, along with the name of 
//the actor or tv show they are searching for