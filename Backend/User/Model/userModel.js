const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  phonenumber: Number,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
