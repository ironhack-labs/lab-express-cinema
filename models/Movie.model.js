const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({

	title: String,
	director: String,
	stars: {
		type: Array,
		"default": [ ]
	},
	image: String,
	description: String,
	showtimes: {
		type: Array,
		"default": [ ]
	},
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;




