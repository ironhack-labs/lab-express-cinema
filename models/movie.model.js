const {Schema, model} = require('mongoose');

const movieSchema = new Schema(
    {
    title: String,
    director: String,
    Stars: [String],
    image: String,
    description: String,
    showtimes: [String]
},
{
    timestamps: true
})

module.exports = model('Movie', movieSchema)