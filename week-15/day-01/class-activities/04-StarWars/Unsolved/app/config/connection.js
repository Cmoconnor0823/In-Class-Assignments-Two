// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");


// Setting up our connection information
var sequelize = new Sequelize("starwars", "root", "Stitch626", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
});


// Exporting our connection
module.exports = sequelize;
