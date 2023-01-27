const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    // find() => for get all the data from the DB
    const users = await User.find();
    // get data into json form use json()
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
    // save() => to Store the data into DB
    const result = await user.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await user.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await user.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

// updateMany() is also same as deleteMany()
router.delete("/", async (req, res) => {
  try {
    const result = await user.deleteMany({ mobile: "1000" });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
