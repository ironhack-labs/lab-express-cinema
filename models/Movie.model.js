

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
    {
    title: {type: String, required: true, trim: true},
    director: {type: String, required: true, trim: true},
    stars: [{type: String, required: true, trim: true}],
    image: {type: String, trim: true},
    description: {type: String, trim: true},
    showtimes: [{type: String, trim: true}]
    }
, {timestamps:true})

const Movie = model("movies", movieSchema);

module.exports = Movie;
