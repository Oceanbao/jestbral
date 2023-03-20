if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/footprints", (req, res) => {
  res.render("footprints/footprints");
});

app.get("/stocks", (req, res) => {
  res.render("stocks/stocks");
});

app.get("/yimoying", (req, res) => {
  res.render("yimoying/yimoying");
});

app.get("/yimoying/episodes/:episode", (req, res) => {
  const episode = req.params.episode;
  res.render(`yimoying/episodes/${episode}`);
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});

module.exports = app;
