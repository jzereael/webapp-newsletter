//jshit esversion: 6
const port = 3000;
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});



app.post("/", function(req, res) {
  var firstName = req.body.Fname;
  var lastName = req.body.Lname;
  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  }

  var options = {
    url: 'https://us4.api.mailchimp.com/3.0/lists/d733e88c13',
    method: 'POST',
    headers: {
      "Authorization": "jesse1 126819ee99dbb50a46a126229e6f0d6c-us4"
    },
    //You need to stringify JavaScript Object
    body: JSON.stringify(data)
  };

  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
    }

  });



  console.log(firstName);
  console.log(lastName);
  console.log(email);

  res.sendFile(__dirname + "/success.html");

});



app.listen(port, function(req, res) {
  console.log(`Server started @ port ${port}`);
});

//ID
//126819ee99dbb50a46a126229e6f0d6c-us4
//API
//7130361748
