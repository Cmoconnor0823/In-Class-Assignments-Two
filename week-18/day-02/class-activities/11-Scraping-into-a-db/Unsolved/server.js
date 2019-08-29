// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function (req, res) {
  res.send("Hello world");
});

// TODO: make two more routes
// Retrieve data from the db

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)

app.get("/all", function (req, res) {
  // Find all results from the scrapedData collection in the db
  db.scrapedData.find({}, function (error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      res.json(found);
    }
  });
});
// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

app.get("/scrape", function (req, res) {
  axios.get("https://www.pbs.org").then(function (response) {
    var $ = cheerio.load(response.data);
    //console.log("response", response);
    var $ = cheerio.load(response.data);
    console.log($("article").length)
    $("article").each(function (i, element) {

      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");

      console.log(title)
      console.log(link);
      // Save these results in an object that we'll push into the results array we defined earlier
      if (title && link) {
        db.scrapedData.insert({
          title: title,
          link: link
        },
        function (err, inserted) {
          if (err) {
            console.log(err);
          }
          else {
            console.log("hello",inserted);
          }
        });
      }
    });
  });
  // Send a "Scrape Complete" message to the browser
  res.send("Scrape Complete");
});

// Listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
