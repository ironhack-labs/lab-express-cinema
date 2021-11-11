const mongoose = require('mongoose');
/* const { Schema, model } = require("mongoose");
 */
const model = mongoose.model;
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true
    
  }

);

const Movie =  model("Movie", movieSchema);

module.exports = Movie;