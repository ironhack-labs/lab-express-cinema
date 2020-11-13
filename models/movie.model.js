const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const movie = mongoose.model("Movie", cinemaSchema);

module.exports = movie;
