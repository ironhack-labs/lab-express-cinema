const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const schema = {
      title: {type: String, unique: true, required: true},
      director: {type: String},
      stars: {type: Array},
      image: {type: String, required: true},
      description: {type: String},
      showtimes: {type: Array}
    }    

const Movie = mongoose.model('movie', schema);

module.exports = Movie;
