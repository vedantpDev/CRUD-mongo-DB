const mongoose = require("mongoose");
// IMP : to create schema key : dataType of the value.
const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  mobile: {
    type: String,
    required: true,
  },
});
// To export mongoose Schema use model("Name", SchemaName).
module.exports = mongoose.model("User", userSchema);
