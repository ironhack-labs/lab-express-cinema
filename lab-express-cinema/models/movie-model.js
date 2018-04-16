const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema ({ //NEED TO CHANGE THIS
    title: {type: String, required: true}, 
    director: {type: String},
    stars: {type: Array},
    image: {type: String},
    description: {type: String},
    showtimes: {type: Array}
}, {
    timestamps: true  //a setting the schema constructor knows to look for and use
});

//create the "Book" model for the "Books" collection
const Movie = mongoose. model("Movie", movieSchema);

module.exports = Movie;
