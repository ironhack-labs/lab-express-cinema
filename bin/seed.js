require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Movies = require("../models/Movie.model")



const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        console.log("connect", connect)
        const movies = await Movies.create(data);
        console.log("movies", movies)
        mongoose.connection.close();
    }catch(err){
        console.error(err)
    }
};

seedDb();
