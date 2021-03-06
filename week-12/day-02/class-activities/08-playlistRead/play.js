var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Stitch626",
  database: "play_listDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showSongs();
    showSongs();
    showArtist();
  });

  function showSongs() {
    connection.query("SELECT * FROM songs", function(err, res) {
      for (var i =0; i < res.legnth; i++){
          console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("-----------------------------------");
      });
    }
    
    function showArtist() {
      var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
      });
    
      // logs the actual query being run
      console.log(query.sql);
    }
   

