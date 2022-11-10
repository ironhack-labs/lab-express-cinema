const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const moviesSchema = new mongoose.Schema([
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
    }])

const Movie = model("movie", moviesSchema);

module.exports = Movie;