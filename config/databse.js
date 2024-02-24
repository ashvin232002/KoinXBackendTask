const mongoose = require("mongoose");
const  Crypto = require("../models/Crypto")
require("dotenv").config();


exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB ka Connection SuccessFull");
      })
      .catch((err) => {
        console.log("DB connection Issues");
        console.error(err);
        process.exit(1);
      });
}