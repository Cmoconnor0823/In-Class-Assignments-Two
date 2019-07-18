var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Stitch626",
    database: "greatBay_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    ask();
});

function ask() {
    inquirer
        .prompt({
            name: "postOrBid",
            type: "list",
            message: "Would you like to [POST] and auction or [BID] on an auction?",
            choices: ["POST", "BID", "EXIT"]
        })
        .then(function (answer) {
            if (answer.postOrBid === "POST") {
                showAuction();
            } else if (answer.postOrBid === "BID") {
                bidAuction();
            } else {
                connection.end();
            }
        })
}

// function to handle posting new items up for auction
function showAuction() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item would you like to submit",
            },
            {
                name: "catagory",
                type: "input",
                message: "What catagory would you like to place your auction in?",
            },
            {
                name: "startingBid",
                type: "input",
                message: "What would you like your starting bid to be?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO auctions SET ?",
                {
                    item_name: answer.item,
                    catagory: answer.catagory,
                    starting_bid: answer.startingBid || 0,
                    higest_bid: answer.startingBid || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("your auction was created successfully!")
                    ask();
                }
            );
        });
}

function bidAuction() {
    connection.query("SELECT * FROM auctions", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.legnth; i++) {
                            choiceArray.push(results[i].item_name);
                        }
                        return choiceArray;
                    },
                    message: "What auction would you like to place a bid in?"
                },
                {
                    name: "bid",
                    type: "input",
                    message: "How much would you like to bid?"
                }
            ])
            .then(function(answer) {
                // get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                  if (results[i].item_name === answer.choice) {
                    chosenItem = results[i];
                  }
                }
        
                // determine if bid was high enough
                if (chosenItem.highest_bid < parseInt(answer.bid)) {
                  // bid was high enough, so update db, let the user know, and start over
                  connection.query(
                    "UPDATE auctions SET ? WHERE ?",
                    [
                      {
                        highest_bid: answer.bid
                      },
                      {
                        id: chosenItem.id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log("Bid placed successfully!");
                      start();
                    }
                  );
                }
                else {
                  // bid wasn't high enough, so apologize and start over
                  console.log("Your bid was too low. Try again...");
                  start();
                }
              });
          });
        }