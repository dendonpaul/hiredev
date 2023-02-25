const express = require("express");
const app = express();
const cors = require("cors");
const PageController = require("./controllers/PageController");
const path = require("path");
//db
const dbConnect = require("./db/db");

const staticPath = path.join(__dirname + "/public");

app.use(express.static(staticPath));
app.use(cors());
app.use(express.json());
//required when using form
app.use(express.urlencoded({ extended: true }));

//paths
app.get("/", PageController.homePage);
app.post("/hire-developer", PageController.hireDeveloper);
app.post("/register-developer", PageController.registerDeveloper);
app.post("/login", PageController.login);
app.post("/post-job", PageController.postJob);

//Fetch Developers
app.get("/dev-list", PageController.devList);
app.get("/comp-list", PageController.compList);
app.get("/job-list", PageController.jobList);
if (dbConnect()) {
  app.listen(5001, () => console.log("Server running on 5001"));
}
