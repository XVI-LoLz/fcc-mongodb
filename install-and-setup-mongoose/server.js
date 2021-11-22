require("dotenv").config();

const mongoose = require("mongoose");

const mySecret = process.env["MONGO_DB"];
mongoose.connect(
  mySecret,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      throw new Error("Failed to connect");
    } else {
      console.log("Connected");
    }
  }
);
