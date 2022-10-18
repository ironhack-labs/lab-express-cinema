const { Schema } = require("mongoose");

const movies = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

module.exports = mongoose.model('Movies', movies);