const mongoose = require('mongoose')
const Schema = mongoose.Schema

let movieSchema = new Schema({
	title: String,
	director: String,
	stars: [String],
	image: String,
	description: String,
	showtimes: [String]
}, {timestamps:true})

module.exports = mongoose.model('Movie', movieSchema)
