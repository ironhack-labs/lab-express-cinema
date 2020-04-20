const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Movie = mongoose.model('Movie', movieShema);

// exports module in order to use it on the rout
module.exports = Movie;