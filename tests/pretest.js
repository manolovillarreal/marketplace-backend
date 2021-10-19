require("dotenv").config();
var mongoose = require("mongoose");
const { envs } = require("../Types/types");

if (process.env.NODE_ENV != envs.TEST)
  throw new Error("The NODE_ENV is not set as Test mode");

const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on("error", console.error);
db.once("open", function () {
  db.dropCollection("users", function (err, result) {
    if (err) {
      console.log("error delete collection");
    } else {
      console.log("delete collection success");
    }

    db.close();
  });
});

mongoose.connect(process.env.MONGODB_CNN_TEST);
