const { Schema, model} = require("mongoose");

const moviesSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    director :  {
        type : String,
        required : true
    },

    stars : {
        type: [String],
        required : true
    },

    image : {
        type: String,
        default : "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },

    description : {
        type: String,
        required : true
    },

    showtimes : {
        type : [String],
        required : true
    }

});

const Movie = model("Movie", moviesSchema);

module.exports = Movie;