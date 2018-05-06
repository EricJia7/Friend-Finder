

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homePage.html"));
});
  
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));

});
  
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "api/friends.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
