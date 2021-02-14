if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./passport.config");
// initializePassport(passport, (username) => {
//   users.find((user) => user.username === username);
// });
const login = require("./component/login");
const register = require("./component/register");

app.set("views", "./public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/login", login);
app.use("/register", register);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Successfully, Start server port 5000... "));
