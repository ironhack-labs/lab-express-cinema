const mongoose = require('mongoose');
const { Schema, model} = mongoose;
//Creating the Schema for movies

const movieSchema = new Schema (
    {
    title: { type: String },
	director: { type: String },
	stars: { type: [String] },
	image: { type: String },
	description: { type: String },
	showtimes: { type: [String] },
    }
);
const Movie = model("Movie", movieSchema);
module.exports = Movie;
