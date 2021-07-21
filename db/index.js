// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

const Movie = require('../models/Movie.model.js')
const movieData = require('../seeds/movies.seed.js')
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Movie.deleteMany()
  })
  .then(() => {
    console.log("movies deleted")
    return Movie.insertMany(movieData.module)
  })
  .then(() => {
    console.log("movies inserted")

    mongoose.connection.close(() => {
      console.log('Mongoose disconnected')
    }) 
  })
  .catch((err) => {
    console.error("Error !!!: ", err);
  })
