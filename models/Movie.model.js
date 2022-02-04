const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        starts: [String],
        image: String,
        description: String,
        showtimes: [String]
    }
);


module.exports = model('Movie', movieSchema)