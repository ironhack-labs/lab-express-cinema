// models/Movie.model.js
const { Schema, model } = require('mongoose');

const modelSchema = new Schema(
	{
		title: String,
		director: String,
		stars: Array,
		image: String,
		description: String,
		showtimes: Array
	},
	{
		timestamps: true
	}
);

module.exports = model('Movie', modelSchema);

module.exports = Movie;
