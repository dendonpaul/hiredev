const fs = require("fs");

const homePage = (req, res) => {
  res.send("Homepagenew");
};

const hireDeveloper = (req, res) => {
  fs.readFile("companies.json", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    let existingData = JSON.parse(data);
    existingData.push(req.body);
    existingData = JSON.stringify(existingData);

    fs.writeFile("companies.json", existingData, (err) => {
      if (err) throw err;
      console.log("Data appended to file");
    });
  });

  return res.json({ message: "form submitted" });
};

const registerDeveloper = (req, res) => {
  fs.readFile("developers.json", "utf-8", (err, data) => {
    if (err) throw err;
    let existingData = JSON.parse(data);
    existingData.push(req.body);
    existingData = JSON.stringify(existingData);

    fs.writeFile("developers.json", existingData, (err) => {
      if (err) throw err;
      console.log("Data appended to file");
    });
  });

  return res.json({ message: "form submitted" });
  //open json file and append it with latest userdata
};
const login = (req, res) => {
  res.send("Login Page");
};

//Dev list
const devList = async (req, res) => {
  const devData = fs.readFileSync("developers.json");
  res.send(devData);
};
//Comp list
const compList = async (req, res) => {
  const compData = fs.readFileSync("companies.json");
  res.send(compData);
};

module.exports = {
  homePage,
  hireDeveloper,
  registerDeveloper,
  login,
  devList,
  compList,
};
