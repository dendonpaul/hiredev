const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  name: String,
  jtitle: String,
  technologies: Array,
});

const JobsModel = mongoose.model("jobs", JobsSchema);

module.exports = JobsModel;
