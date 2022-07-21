const mongoose = require("mongoose");

const DB = process.env.DATABASE;

// Connect MongoDB at default port 27017.

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
