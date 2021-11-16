const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moviesSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    stars: {type: Array},
    image: {type: String},
    description: {type: String},
    showtimes: {type: Array}
})

module.exports = mongoose.model('Movie', moviesSchema)