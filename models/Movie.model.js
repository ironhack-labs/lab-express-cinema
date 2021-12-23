const mongoose = require('mongoose');
const Schema = mongoose.Schema (
    { 
        title: {type: String, require: true},
        director: {type: String},
        stars: {type: [ String ]},
        image: {type: String},
        description: {type: String},
        showtimes: {type: [ String ]},
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movie', Schema);
module.exports = Movie; 
