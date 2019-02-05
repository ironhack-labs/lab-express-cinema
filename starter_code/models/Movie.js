//setup
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema creation
const movieSchema = new Schema({
	//
	title: {
		type: String,
		required: true
	},
	director: {
		type: String,
		required: true
	},
	stars: {
		type: [String]
	},
	image: {
		type: String,
		validate: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
		// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
	},
	description: {
		type: String,
		required: true
	},
	showtimes: {
		type: [String],
		required: true,
		minlength: 5,
		maxlength: 5
	}

}, {
	// additional settings for special options
	timestamps: true
});

// use the schema to create the model
const Movie = mongoose.model("Movie", movieSchema);


// make it available to the app
module.exports = Movie;