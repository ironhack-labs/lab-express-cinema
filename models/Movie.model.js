const mongoose = require("mongoose");
const schema  = new mongoose.Schema ({
    title: { type: String },
    director: { type: String },
    stars: [String],
    image: { type: String },
    description: { type: String },
    showtimes: [String],
});
const Movie = mongoose.model("movie", schema);
module.exports = Movie;