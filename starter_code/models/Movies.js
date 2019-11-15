const { model, Schema } = require('mongoose');

const Movies = new Schema(
	{
		title: String,
		director: String,
		stars: [ String ],
		image: String,
		description: String,
		showtimes: [ String ]
	},
	{
		timestamps: true
	}
);

module.exports = model('Movies', Movies);
