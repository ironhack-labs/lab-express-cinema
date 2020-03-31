const mongoose = require('mongoose'); //import from node_modules

const Schema = mongoose.Schema; //accessing moongose.Schema

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie



