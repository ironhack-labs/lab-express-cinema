const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema({

    title: {

        type: String,
        required: [true]
    }, 

    director: {

        type: String,
        required: true
    },

    stars : {

        type: [String]
    },

    image: {

        type: String,
        default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg"
    },

    description: {

        type: String
    },

    showtimes: {

        type: [String]
    }
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;