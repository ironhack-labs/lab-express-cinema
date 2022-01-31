const { Schema, model } = require("mongoose");

const movieSchema = new Schema ({
    title:{
        type: String,
        require: true
    },
    director:{
        type: String,
        require: true
    },
    stars:{
        type: [String],       // puse tipo array
           //modificado
    },

    image:{
        type: String,
    },
    
    description:{
        type: String,
        require: true
    },
    showtimes:{
        type: [String],       // puse tipo array
           //modificado
    }
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;