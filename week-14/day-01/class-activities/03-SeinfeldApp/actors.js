// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Stitch626",
  database: "How_I_Met_Your_Mother_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
app.get("/",(req, res) =>{
    res.send("Here is the default response"
    )},

app.get("/cast", function(req, res){
    connection.query("select * from actors", function(err, result) {
        var html = "<h1>Here is the cast from How I Met Your Mother>/h1>"

        html +="<ul>";

        for (var i = 0; i < result.legnth; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Actor Name: " + result[i].actor_name + "</p>";
            html += "<p>Coolness Points: " result[i].coolness_points +"</p>";
        }

        html += "</ul>";
        res.send(html);
    })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });