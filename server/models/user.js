const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  descriptor: [Number],
});

module.exports = mongoose.model("User", UserSchema);
