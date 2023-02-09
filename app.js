const express = require("express");
const app = express();
const cors = require("cors");
const PageController = require("./controllers/PageController");

app.use(express.json());
//required when using form
app.use(express.urlencoded());
app.use(cors());

//paths
app.get("/", PageController.homePage);
app.get("/hire-developer", PageController.hireDeveloper);
app.post("/register-developer", PageController.registerDeveloper);
app.get("/login", PageController.login);

app.listen(5001, () => console.log("Server running on 5001"));
