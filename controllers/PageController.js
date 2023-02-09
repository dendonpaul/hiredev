const fs = require("fs");

const homePage = (req, res) => {
  res.send("Homepagenew");
};

const hireDeveloper = (req, res) => {
  res.send("Hire Developer");
};
const registerDeveloper = (req, res) => {
  const { name, phone, email, technologies } = req.body;

  //   fs.appendFile(
  //     "developers.json",
  //   `${JSON.stringify(req.body)}`,
  //   function (err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   }
  // );

  fs.readFile("developers.json", function (err, data) {
    let inputData = JSON.stringify(req.body);
    console.log(inputData);
    let datas = JSON.parse(data);
    console.log(datas);
    fs.appendFile(
      "developers.json",
      `${datas.push(inputData)}`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });
  //open json file and append it with latest userdata
};
const login = (req, res) => {
  res.send("Login Page");
};

module.exports = { homePage, hireDeveloper, registerDeveloper, login };
