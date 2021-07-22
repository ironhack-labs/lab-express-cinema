
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: {
		 type: String,
		 required: true},
	director: String,
	stars: [ Array ],
	image: String,
	description: String,
	showtimes: [ Array ],

});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;