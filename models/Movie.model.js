// Iteration #1
const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    director:{
        type: String,
        
    },
    stars:{
        type: [String],
        
    }, 
    image:{
        type: String,
        
    },
    description:{
        type: String,
    
    },
    showtimes:{
        type: [String],
        
    },
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;