const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose.set("strictQuery", false);
  const uri =
    "mongodb+srv://dendonpaul2022:123Password123@clusterdenny.9conzii.mongodb.net/?retryWrites=true&w=majority";
  const client = await mongoose.connect(uri);
};

module.exports = dbConnect;
