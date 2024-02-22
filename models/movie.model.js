const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema (
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlength: [2, 'Title needs at least 2 chars']
        },
        director: {
            type: String
        },
        stars: {
            type: [String]
        },
        image: {
            type: String
        }, 
        description: {
            type: String, 
        },
        showtimes: {
            type: [String]
        },
    },
    {timestamps: true}
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;