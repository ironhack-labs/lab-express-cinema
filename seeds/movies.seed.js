const mongoose = require('mongoose')

const Movie = require('../models/Movie.model')

const data = require('../data.json');

MONGO_URI = "mongodb://localhost/lab-express-cinema";

const fillMovies = async ()=>{

    try{
        console.log("Connecting do DB...")
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        await Movie.deleteMany()

        const newMovies = data
         
        await Movie.create(newMovies)
        console.log(`Inserted ${newMovies.length} drones`);

    }catch (error){
        return error
    }


    console.log("Disconnecting from the database...");
    mongoose.disconnect()
}

fillMovies()