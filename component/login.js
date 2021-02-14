const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("checkUser");
});

router.post("/", (req, res) => {
  res.send("Post Login");
});

module.exports = router;
