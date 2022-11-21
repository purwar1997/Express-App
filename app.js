const express = require("express");
const app = express();
const port = 5000;

// get(path or route, callback) is used to make get requests
// a response can be in many forms

// string
app.get("/", (req, res) => {
  // route for a home page
  res.status(200).send("Welcome Shubham");
});

app.get("/social", (req, res) => {
  // route for a social webpage
  res.send("You use twitter");
});

app.get("/social/task", (req, res) => {
  res.send("You use twitter to read news");
});

app.get("/language", (req, res) => {
  res.send("You code in JavaScript");
});

app.get("/language/task", (req, res) => {
  res.send("You code in JavaScript to create web apps");
});

// HTML element
app.get("/features", (req, res) => {
  res.send(
    "<h1 style='text-align: center;'>A test runner built for humans<h1>"
  );
});

// JSON data or an object
app.get("/details", (req, res) => {
  const details = {
    name: "Shubham Purwar",
    age: "25",
    occupation: "JS Developer",
    country: "India",
  };

  res.send(details);
});

// an Array
app.get("/info", (req, res) => {
  const userInfo = ["Shubham", 25, "JS Developer", "India"];
  res.send(userInfo);
});

// boolean value
app.get("/authorized", (req, res) => {
  const isUserAuthorized = true;
  res.send(isUserAuthorized);
});

// json() is used to send a JSON response
app.get("/social/twitter", (req, res) => {
  const twitter = {
    userName: "shubhampurwar06",
    email: "shubhampurwar35@gmail.com",
    followers: 12,
    following: 20,
    bio: "Newbie on the path to become a Full stack developer",
  };

  res.status(200).json({ twitterDetails: twitter });
});

app.get("/social/github", (req, res) => {
  const github = {
    userName: "shubhampurwar1997",
    email: "shubhampurwar511@gmail.com",
    followers: 5,
    following: 0,
    respositories: 60,
    contributions: 550,
  };

  res.status(200).json({ githubDetails: github });
});

app.get("/:token", (req, res) => {
  res.status(404).send(`Error: Cannot access the web page ${req.params.token}`);
});

app.get("/social/:token", (req, res) => {
  const social = req.params.token;

  res
    .status(404)
    .send(`Sorry, user is not on ${social[0].toUpperCase()}${social.slice(1)}`);
});

// listen() is used to start a web server
// here server will run on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
