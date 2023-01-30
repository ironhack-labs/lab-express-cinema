const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: "String",
    require: "A tittle is required"
  },
  director: {
    type: "String",
    require: "A director is required"
  },
  stars: [{
    type: "String",
    require: "A star is required"
  }],
  image: {
    type: "String",
    require: "An image is required"
  },
  description: {
    type: "String",
    require: "A descrption is required"
  },
  showtimes: [{
    type: "String",
    require: "A showtime is required"
  }]
})  

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;