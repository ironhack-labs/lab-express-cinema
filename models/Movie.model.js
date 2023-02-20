const mongoose = require("mongoose");

//directly create Movie model
const Movie = mongoose.model("Movie", {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

module.exports = Movie;