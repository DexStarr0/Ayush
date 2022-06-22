const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//dotenv node module
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./db/conn");

//we link the router files to make our route easy
app.use(require("./router/auth"));

//middleware
const middleware = (req, res, next) => {
  console.log("middleware is working properly");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("<h1>home route </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>about route </h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>contact route </h1>");
});
app.get("/signin", (req, res) => {
  res.send("<h1>signin route </h1>");
});
app.get("/signup", (req, res) => {
  res.send("<h1>signup route </h1>");
});
//port listen
app.listen(PORT, () => {
  console.log(`running at port no. ${PORT}`);
});
