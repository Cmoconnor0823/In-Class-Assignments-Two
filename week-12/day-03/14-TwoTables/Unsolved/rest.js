var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var obj = [
    {
        name: "bob",
        phone: "23904832",
        email: "nope",
        id: "3"
    }
    //the table info from the user entry table should be pushed to this array
]
// this gives us the different url paths for the different html pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "rest.html"))
})
app.get("/api/restable", (req, res) => {
    res.sendFile(path.join(__dirname, "restable.html"))
    // return res.json(obj);
})
app.get("/api/restmake", (req, res) => {
    res.sendFile(path.join(__dirname, "restmake.html"))
    // return res.json(obj);
})
app.get("/api/restablestuff", (req, res) => {
    // res.sendFile(path.join(__dirname, "restable.html"))
    // console.log(obj);
    return res.json(obj);
})
app.post("/api/input", (req, res) => {
    var insert = req.body;
    obj.push(insert);
})
// This tell the server to start listening
app.listen(PORT, function() {
    console.log("app listening on Port " + PORT)
});