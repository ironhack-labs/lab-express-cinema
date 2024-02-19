const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {
            type:String,
            require:[true, 'Title is required']
        },
        director: {
            type: String
        },
        stars: {
            type: [String]
        },
        image:{
            type: String
        },
        description: {
            type: String
        },
        showtimes: {
           type:[String] 
        }
    }
)

const movieModel = mongoose.model('movie', movieSchema);
module.exports = movieModel