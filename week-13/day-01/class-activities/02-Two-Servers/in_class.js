// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var portSeven = 7000;

var portFifty = 7500;

var arr = ["Legend-Dairy", "Carpe Diem", "Just Do It!"]




// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {
    var quote = arr[Math.floor(Math.random()*arr.length)]
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url + quote);
}

function handleRequestTwo(request, response) {
    var quote = arr[Math.floor(Math.random()*arr.length)]
    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url + quote);
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(portSeven, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + portSeven);
});


serverTwo.listen(portFifty, function() {
    console.log("Server listening on: http://localhost" + portFifty);
    console.log()
})