const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    title: { type: String },
    director: { type: String },
    stars: { type: Array },
    image:{ type: String },
    description: { type: String },
    showtimes: { type: Array }
});

const Movie = mongoose.model("Movie", Schema);

module.exports = Movie;