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

app.get("/yishuren", (req, res) => {
  res.render("yishuren/yishuren");
});

app.get("/yishuren/episodes/:id", (req, res) => {
  res.render("yishuren/episodes/:id");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
