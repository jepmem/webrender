const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/minigame", (req, res) => {
  res.render("minigame");
});

app.get("/healthz", (req, res) => res.send("ok"));

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${port}`);
});
