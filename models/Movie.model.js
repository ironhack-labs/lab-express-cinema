const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

const MovieModel = mongoose.model("Movie.model", MovieSchema);

module.exports = MovieModel;
