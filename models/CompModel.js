const mongoose = require("mongoose");

const CompSchema = new mongoose.Schema({
  name: String,
  uname: String,
  password: String,
  phone: String,
  email: String,
  technologies: Array,
});

const CompModel = mongoose.model("companies", CompSchema);

module.exports = CompModel;
