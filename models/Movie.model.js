const mongoose = require('mongoose');
const { Schema, model} = mongoose;
//Creating the Schema for movies

const movieSchema = new Schema (
    {
    title: { type: String },
	director: { type: String },
	stars: { type: [] },
	image: { type: String },
	description: { type: String },
	showtimes: { type: [] },
    }
);
const Movie = model("Movie", movieSchema);
module.exports = Movie;
