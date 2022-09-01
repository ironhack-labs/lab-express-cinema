const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: { type:String},
  director: { type: String },
  stars: [{ type: String }],
  image: { type: String },
  description: { type: String},
  showtimes: [{ type: String}]
})


const MovieModel = model('movies', movieSchema);

module.exports = MovieModel;