require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Movie = require("../models/Movie.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const movies = await Movie.create(data)
        console.log(movies)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()