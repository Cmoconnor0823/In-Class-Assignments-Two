// Dependencies
// =============================================================

//Sequelize references the standaard library
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// create a character model that matches up with the 
// DB shown in schema.sql

var Character = sequelize.define("character", {
    // the routeName gers saved as a string
    routeName: Sequelize.STRING,
    //the name of the character (a string)
    name: Sequelize.STRING,
    //the character's role (a string)
    role: Sequelize.STRING,
    // the character's age (a string)
    age: Sequelize.INTEGER,
    // and the character's force points (an int)
    forcePoints: Sequelize.INTEGER
}, {
    freezeTableName: true 
});

//Syncs with the DB
Character.sync();

//now export it 
module.exports = Character;