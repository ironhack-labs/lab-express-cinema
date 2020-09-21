const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({   
    title: {type: String},
    director: {type: String},
    stars: {type: [String]},
    image: {
        type: String,
        default: 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
    },
      
    description: {type: String},
    showtimes: {type: [String]}
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

