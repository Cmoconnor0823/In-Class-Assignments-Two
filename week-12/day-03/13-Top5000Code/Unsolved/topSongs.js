var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",

    port:3306,

    user:"root",

    password: "Stitch626",
    database: "top_songs_DB"
});


connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  function search() {
      inquirer
      .prompt({
          name:"action",
          type: "list",
          message: "What would you like to do? ",
          choices: [
              "~Search for songs by artist~",
              "~Search for all artists who appear more than once~",
              "~Search for entries within a specific range~",
              "~Search for a specific song~",
              "~Exit application~",
          ]
      })
      .then(function(answer){
          switch (answer.action) {
            case "~Search for songs by artist~":
            searchArtist();
            break;

            case "~Search for all artists who appear more than once~":
            searchMultiArtist();
            break;

            case "~Search for entries within a specific range~":
                searchRange();
                break;
            
            case "~Search for a specific song~":
                searchSong();
                break;
            
            case "~Exit application~":
                connection.end();
                break;

          }
      });
    


  function searchArtist() {
    inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        runSearch();
      });
    });
  }
}