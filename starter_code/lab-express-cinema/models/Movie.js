const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
	title : String,
	director: String,
	starts: [String],
	image: String,
	descritption: String,
	showtimes: String
}, {
    createdAt: "created_at",
    updatedAt: "updated_at"	
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;