const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: String
});

const MoviesModel = mongoose.model("Movie", movieSchema);

module.exports = MoviesModel;
