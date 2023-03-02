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

app.get("/meidechensi", (req, res) => {
  res.render("meidechensi/E02_chiangxun");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
