const { Schema, model } = require("mongoose");

const movieSchema = new Schema( //pattern for all movies
    {
        title: String,
        director: String,
        stars: [],
        image: String,
        description: String,
        showtimes: []
    }
); 

const Movie = model("Movie", movieSchema); //name of model + pattern docs in DB should follow

module.exports = Movie; //export what we have in the variable Movie


