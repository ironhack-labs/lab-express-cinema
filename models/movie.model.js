const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
        title:{
            required: true,
            type: String,
        },
        director:{
            required: true,
            type: String
        },
        stars:{
            type: [String]
        },
        image:{
            required: true,
            type: String
        },
        description:{
            type: String,
            required: true
        },
        showtimes:{
            required: true,
            type: [String]
        }
    },
    {
        timestamps: true
    })

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;