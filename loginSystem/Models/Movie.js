const mongoose = require('mongoose')
const Schema = mongoose.Schema

var movieSchema = new Schema({
    movie: String,
    year: String,
    director: String,
})

module.exports = mongoose.model("movie", movieSchema) //MOVIE IS THE REFERENCE TO THIS SCHEMA BUT ITS ALSO THE DIRECTORY WHERE FIND() WILL LOOK WHEN SEARCHING 