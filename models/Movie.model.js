const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    stars: {type: Array, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    showtimes: {type: Array, required: true}
}, {versionKey: false, timestamps: true});

module.exports = mongoose.model('Movie', movieSchema);