const mongoose = require('mongoose')
const Movies = require('../models/movie.model')
const movies = require('../seeds/movies.seed')
require('../db/index')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-cinema";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Movies.create(movies)
  })
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`)
    return mongoose.connection.close()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
