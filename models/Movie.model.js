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
            type:Array
        },
        image:{
            type:String
        },
        description:{
            type:String
        },
        showtimes:{
            type:Array
        }
},{
    timestamps:true
})

const Movie = model("Movie", movieSchema);
module.exports = Movie;