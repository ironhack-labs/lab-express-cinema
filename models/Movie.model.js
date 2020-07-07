const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
    },
    image:{
        type: String,
        match: /^https?:\/\//,
        default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    description:{
        type: String,
        maxlength: 500,
        minlength: 10
    },
    showtimes:{
        type:[String]
    }

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;