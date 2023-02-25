const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
  name: String,
  uname: String,
  password: String,
  phone: String,
  email: String,
  technologies: Array,
});

const DevModel = mongoose.model("developers", devSchema);

module.exports = DevModel;
