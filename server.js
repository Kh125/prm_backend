const express = require("express");
const mongo = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/home", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Page");
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
