const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: Array },
    image: { type: String },
    description: { type: String },
    showtimes: { type: Array }
}, {
    timestamps: true
    // Automatically creates 2 fields in the mongo DB: createdAt and updatedAt.
    // This is a mongoose function
});

const Movie = mongoose.model( 'Movie', movieSchema );

module.exports = Movie;