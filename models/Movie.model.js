const { Schema, model } = require('mongoose');

// const Schema = mongoose.Schema;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const moviesSchema = new Schema(
      {
        title: String,
        director: String,
        stars: Array, 
        description: String,
        image: String,
        showtimes: Array
      }
);

const Movie = model("Movie", moviesSchema);

module.exports = Movie;
