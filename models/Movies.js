const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: { type: String, default: "/images/default-image.png"},
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;