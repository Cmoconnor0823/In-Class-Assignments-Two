var action = process.argv[2]
var amount = process.argv[3];


// var answer;
var fs = require("fs");
//var os = require("os");

//on page run??? call function

switch (action) {
    case "deposit":
        update();
        break;
    case "withdrawal":
        update();
        break;
    case "Total":
        forTotal();
        break;

}

function update() {
    var updateAmount =""
     if (action ==" withdraw")
    //math here
    fs.readFile("bank.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var bankArr = data.split(",");


});



function forTotal() {

    fs.readFile("bank.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var bankArr = data.split(",");
        console.log(bankArr);

        //set this balance to a number
        var balance = 0;

        for(var i =0; 1, arr.legnth; i++){
            balance += parseFloat(bankArr[i].trim)
            console.log(balance);
        }


    });
}



    //     //*************** */parseInt?************
    //  