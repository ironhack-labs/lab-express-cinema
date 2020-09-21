const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
    title:String,
    director: String,
    stars: Array,
    image: String,
    description: String
})

const MovieModel = mongoose.model("movies", MovieSchema);
module.exports = MovieModel;