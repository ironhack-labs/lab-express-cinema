
const {Schema, model} = require('mongoose');

const movieSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        director: String,
        stars: { type:[String] },
        image: String,
        description: String,
        showtimes: [String]
    },
    {
        timestamps: true
    }
);

//const Movie = model('Movie', movieSchema)

module.exports = model('Movie', movieSchema)