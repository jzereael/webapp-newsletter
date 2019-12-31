//jshit esversion: 6
const port = 3000;
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  console.log(req.body.Fname);
  console.log(req.body.Lname);
  console.log(req.body.email);
  res.send("Thanks!");

});


app.listen(port, function(req, res) {
  console.log(`Server started @ port ${port}`);
});
