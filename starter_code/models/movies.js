const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]

});

const movieModel = mongoose.model("Movie", Schema);


module.exports = movieModel;