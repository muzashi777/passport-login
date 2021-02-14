const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
const users = [];

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      password: hashedPassword,
    });

    console.log("add user Success");
    res.redirect("/login");
  } catch {
    console.log("cannot add");
    res.redirect("/register");
  }
  console.log("user:", users);
});

module.exports = router;
