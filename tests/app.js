const express = require("express"),
  mongoose = require("mongoose"),
  logger = require("morgan"),
  path = require("path");

app = express();
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");

// Home page, after user successfully logs in
app.get("/", (req, res, next) => {
  res.render("home", {
    name: "Dodley",
    page: "Home",
    first_name: "John",
    last_name: "Doe",
  });
});

// Login page

app.get("/login", (req, res, next) => {
  res.render("login", { page: "Login" });
});

// Reset password page

app.get("/reset_password", (req, res, next) => {
  res.render("reset_password");
});

// Reset password confirm page

app.get("/reset_password_confirm", (req, res, next) => {
  res.render(reset_password_confirm);
});

// Reset password done page

app.get("/reset_done", (req, res, next) => {
  res.render(reset_done);
});

app.listen(5000, () => {
  console.log("Listening top port 5000");
});
