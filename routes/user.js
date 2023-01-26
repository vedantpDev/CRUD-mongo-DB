const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", async (req, res) => {
  const user = new User({
    name: req.body.name,
    dob: req.body.dob,
    mobile: req.body.mobile,
  });

  try {
    const result = await user.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
