// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose')
const Movies = require('../models/movie.model')
const movies = require('../seeds/movies.seed')
require('../db/index')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lab-express-cinema';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Movies.create(movies)
  })
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`)
    return mongoose.connection.close()
  })
  .catch((error) => {console.error(`An error ocurred trying to connect to the database`, error)});