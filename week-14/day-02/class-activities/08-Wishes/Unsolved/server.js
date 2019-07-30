var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Stitch626",
    database: "wishes_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  app.get("/", function(req, res) {
      connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) throw (err);
        res.render("index",{ wishes: data });
      });
  });

  app.post("/", function(req, res){
      //test
    console.log('test 1 You sent, ' + req.body.wishes);

    //test2
    //return res.send('test 2 You sent, ' + req.body.wishes);

    connection.query("INSERT INTO wishes (wish) VALUES (?)",[req.body.wishes], function(err, result){
        if (err) throw err;

        res.redirect("/");
    });
  });

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });