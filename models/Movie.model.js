const { Schema, model } = require('mongoose');

const movieSchema = new Schema ({
    title : {
        type: String,
        required:true
    },
    director : {
        type : String,
        required : true
    },
    stars : {
        type : [String],
        required : true
    },
    image : {
        type : String
    },
    description : {
        type: String    
    },
    showtimes : {
        type : [String]
    },
});

//Creating the model
const Movie = model("movie",movieSchema);
//Exporting the model
module.exports = Movie;