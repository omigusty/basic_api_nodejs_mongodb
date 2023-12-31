const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;
