const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
});

const MovieModel = mongoose.model("Movie", schema);
module.exports = MovieModel;

