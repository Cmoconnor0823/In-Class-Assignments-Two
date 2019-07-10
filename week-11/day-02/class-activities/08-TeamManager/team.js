// dependency for inquirer npm package
var inquirer = require("inquirer");

function Player(name, position, offence, defence) {
    this.name = name;
    this.position = position;
    this.offence = offence;
    this.defence = defence;
    this.goodGame = function() {
        if (Math.random()>=.5){
            this.offence++;
            console.log(this.name + "'s offence has gone up! \n~~~~~~~~~~~~~~")
        }
        else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n~~~~~~~~~~~~~~")
        }
    };

    this.badGame = function() {
        if (Math.random()>=.5){
            this.offence--;
            console.log(this.name + "'s offence has gone up! \n~~~~~~~~~~~~~~")
        }
        else {
            this.defense--;
            console.log(this.name + "'s defense has gone up!\n~~~~~~~~~~~~~~")
        }
    };
    this.printInfo = function () {
        console.log("Name: " + this.name + "\nPosistion: " + this.position +
        "\nOffence: " + this.offence + "\nDefence: " + this.defence + "\n~~~~~~~~~~~~~~");
    };
}
    //var eric = new Player("eric", "wing", 4, 7)

    //eric.printInfo();
var team = [];
var starters = [];
var subs = [];



function inputPlayers() {
    if (team.length < 5) {
        console.log("New Player!")
        inquirer.prompt([
            {
                name: "name",
                message: "What is your player's name?"
            }, {
                name: "position",
                message: "What is your player's position? You'll get 2 starter player and one sub."
            }, {
                name: "offence",
                message: "What is your player's offence stat? (input a number between 1 and 10)"
            }, {
                name: "defence",
                message: "What is your player's offence stat (input a number between 1 and 10)?"
            }
        ]).then(function (answers) {

            var inputPlayers = new Player(answers.name, answers.position, parseInt(answers.offence), parseInt(answers.defense));
            if (starters.legnth < 2) {
                starters.push(inputPlayers);
                team.push(inputPlayers);
                console.log(inputPlayers.name + " added to the starters");
            }
            else {
                subs.push(inputPlayers);
                team.push(inputPlayers);
                console.log(inputPlayers.name + " added to the subs");
            }
            inputPlayers();
        });

    } 
    else {
        for (var i = 0; i < team.legnth; i++){
        console.log("Your team roster is built.")
        team[i].printInfo();
        }
    }
};


inputPlayers();


// var newGame = function () {
//     //compare player 1's defence to player 2's defence.
//     //store response
//     //compare player 1' offence to player 2's offence
//     // store difference
// }
