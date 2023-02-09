const express = require("express");
const app = express();
const cors = require("cors");
const PageController = require("./controllers/PageController");

app.use(cors());
app.use(express.json());
//required when using form
app.use(express.urlencoded());

//paths
app.get("/", PageController.homePage);
app.post("/hire-developer", PageController.hireDeveloper);
app.post("/register-developer", PageController.registerDeveloper);
app.get("/login", PageController.login);

app.listen(5001, () => console.log("Server running on 5001"));
