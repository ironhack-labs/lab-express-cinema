const mongoose = require('mongoose');

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDb(){
  try{
    await mongoose.connect(
      process.env.MONGODB_URL,
      dbOptions
    )
    console.log(`Connected to Mongo!`)
  } catch(e){
    console.log("Error to connect to the database")
  }
};

module.exports = connectDb;