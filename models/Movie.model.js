const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Moviemodel = mongoose.model("movies",movieModel);

module.exports = Moviemodel;