const mongoose = require("mongoose");
require("dotenv").config();
const dbConnectionString = process.env.MONGO_URI;
const dbConnectionMethod = async () => {
  // console.log(dbConnectionString);
  try {
    await mongoose.connect(dbConnectionString);
    console.log("db connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = { dbConnectionMethod };
