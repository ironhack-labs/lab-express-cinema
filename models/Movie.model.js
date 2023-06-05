const { Schema, model } = require("mongoose");

const schema = new Schema({
    title: {
        type: String,
        required: true},
    director: {
        type: String,
        required: true},
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})
module.exports = model('Movie', schema);