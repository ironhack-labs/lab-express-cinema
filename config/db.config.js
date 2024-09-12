
const mongoose = require("mongoose");


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/express-cinema'
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${MONGO_URI}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
