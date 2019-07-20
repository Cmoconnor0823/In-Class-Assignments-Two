var http = require("http");
var fs = require("fs");

var port = 8080;

var server = http.createServer(handelRequest);

function handelRequest(req, res) {
    var path = req.url;

    switch (path) {

        case "/food":
            return fs.readFile(__dirname + "/food.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/frameworks":
            return fs.readFile(__dirname + "/frameworks.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }
}

server.listen(port, function () {
    console.log("Server is listening on PORT: " + port);
});

