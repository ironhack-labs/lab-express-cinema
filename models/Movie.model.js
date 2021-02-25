const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
    title: {
        type: String,
        required: true
         },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const MovieModel = mongoose.model("movies", movieModel);
module.exports = MovieModel;