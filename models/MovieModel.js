// const { Schema, model } = require("mongoose")

const mongoose = require("mongoose")
const Schema = mongoose.Schema  

const movieSchema = new Schema({
    title: String,
    director: String,
    start: Array,
    image: String,
    description: String,
    showtimes: Array,
  },
  { timestamps: true }
)

// module.exports = model("MovieModel", movieSchema)

const Movie = mongoose.model("MovieModel", movieSchema)

module.exports = Movie  

