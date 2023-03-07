const fs = require("fs");
const path = require("path");
path.join(__dirname + "/public");

const DevModel = require("../models/DevModel");
const CompModel = require("../models/CompModel");

const homePage = (req, res) => {
  res.send("Homepagenew");
};
//Register company
const hireDeveloper = async (req, res) => {
  const saveComp = new CompModel(req.body);
  console.log(saveComp);

  //check if user already exists
  const uname = await CompModel.exists({ uname: saveComp.uname });

  if (uname) {
    return res
      .status(301)
      .json({ message: "User already exists. try another" });
  }

  try {
    const savedComp = await saveComp.save();
    if (savedComp) {
      res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};
//Register Developers
const registerDeveloper = async (req, res) => {
  const saveDev = new DevModel(req.body);
  console.log(saveDev);
  //check if username exists
  const uname = await DevModel.exists({ uname: saveDev.uname });
  if (uname) {
    return res.status(301).json({
      message: "username already exists. Try using different username",
    });
  }

  try {
    const savedDev = await saveDev.save();
    if (savedDev) {
      res.status(200).json({ message: "Developer Registered Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};
//Login
const login = async (req, res) => {
  const { username, password, role } = req.body;
  let TheModel;
  role === "developers" ? (TheModel = DevModel) : (TheModel = CompModel);
  const userExists = await TheModel.findOne({ uname: username });
  console.log(userExists);
  //working till above

  //compare password
  if (password === (await userExists.password)) {
    res.status(200).json({ message: "success", redirect: role });
  } else {
    res.json({ message: "Invalid Credentials" });
  }
  //json file method
  // fs.readFile(`${role}.json`, (err, data) => {
  //   if (err) console.log(err);
  //   let dataString = JSON.parse(Buffer.from(data).toString());
  //   // console.log(dataString);
  //   let validData = dataString.filter((d) => {
  //     return username === d.uname;
  //   });
  //   console.log(validData);
  //   //verify uname/pass
  //   if (validData.length > 0 && password === validData[0].pword) {
  //     res.status(200).json({ message: "success", redirect: role });
  //   } else {
  //     res.json({ message: "invalid credentials" });
  //   }
  // });

  // res.send("login page");
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
//Job list
const jobList = async (req, res) => {
  const jobData = fs.readFileSync("joblist.json");
  res.send(jobData);
};

//Post Job
const postJob = async (req, res) => {
  // const { name, jtitle, technologies } = req.body;
  fs.readFile("joblist.json", "utf-8", (err, data) => {
    if (err) throw err;
    let existingData = JSON.parse(data);
    existingData.push(req.body);
    existingData = JSON.stringify(existingData);

    fs.writeFile("joblist.json", existingData, (err) => {
      if (err) throw err;
      console.log("Data appended to file");
    });
  });
};
module.exports = {
  homePage,
  hireDeveloper,
  registerDeveloper,
  login,
  devList,
  compList,
  postJob,
  jobList,
};
