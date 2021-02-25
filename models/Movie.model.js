const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: Boolean, 
    description: String,
    showtimes: Array
  });

  const movieModel = mongoose.model("Movie.model", movieModel);

  
