const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  companyname: String,
  jobtitle: String,
  technologies: Array,
});

const JobsModel = mongoose.model("jobs", JobsSchema);

module.exports = JobsModel;
