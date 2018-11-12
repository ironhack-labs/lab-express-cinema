const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    director:{
        type:String,
        required: true,
    },
    stars:{
        type:[String],
    },
    image:{
        type: String,
    },
    description:{
        type:String,
        required:true,
    },
    showtimes:{
        type:[String],
    },
},{
    timestamps:true,
});

const Movie = mongoose.model("Movie", movieSchema);
//make the "Movie" model sharable to other files in the app
module.exports = Movie;