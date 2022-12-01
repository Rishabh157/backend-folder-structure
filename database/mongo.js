const mongoose = require("mongoose");
const mongoDBErros = require("mongoose-mongodb-errors");
require('dotenv').config()



mongoose.Promise = Promise;
mongoose.plugin(mongoDBErros);
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log('Connected to database')
  })
  .catch((err) => {
    console.log("Could'nt connect with database.")
  });
