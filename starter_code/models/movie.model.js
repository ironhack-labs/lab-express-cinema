const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
title: {
    type: String,
    required: 'The title is required'
},
director: {
    type: String,
    required: 'The director is required'
},
stars: {
    type: Array,
    required: 'Some star is required'
},
image: {
    type: String,
    default: 'http://media.comicbook.com/files/img/default-movie.png'
},
description: {
    type: String,
},
showtimes: {
    type: Array,
    default: ['Currently there are no sessions']
}
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;