const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        director:{
            type:String,
            required:true
        },
        stars:{
            type:[String]
        },
        image:{
            type:String
        },
        description:{
            type:String
        },
        showtimes:{
            type:[String]
        }
},{
    timestamps:true
})

const Movie = model("Movie", movieSchema);
module.exports = Movie;