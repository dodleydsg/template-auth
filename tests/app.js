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
    page: "Home",
    first_name: "John",
    last_name: "Doe",
  });
});

// Register page, create a models for testing

app.get("/register", (req, res, next) => {
  res.render("register", { page: "Register" });
});

app.post("/register", (req, res, next) => {
  res.render("home", {
    page: "Register",
    first_name: "Mary",
    last_name: "Jane",
  });
});

// Login page

app.get("/login", (req, res, next) => {
  res.render("login", { page: "Login" });
});

app.post("/login", (req, res, next) => {
  // If successful return to home page
  res.render("home", {
    page: "Login",
    first_name: "John",
    last_name: "Kennedy",
  });

  // If failure return to login page
  res.render("login", { page: "Login" });
});

// Reset password page

app.get("/reset_password", (req, res, next) => {
  res.render("reset_password", { page: "Reset Password" });
});

app.post("/reset_password", (req, res, next) => {
  res.render("reset_done", { page: "Reset Done" });
});

// Reset password confirm page

app.get("/reset_password_confirm", (req, res, next) => {
  res.render("reset_password_confirm");
});

// Reset password done page


app.listen(5000, () => {
  console.log("Listening top port 5000");
});
