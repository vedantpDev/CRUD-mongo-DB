const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  mobile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
