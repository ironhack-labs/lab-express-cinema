const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// instanciate the schema with option
const movieSchema = new Schema({
	title: String,
	director: String,
	stars: Array,
	image: String,
	description: String,
	showtimes: Array
});

const movieModel = mongoose.model('Movie', movieSchema);

module.exports = movieModel;
