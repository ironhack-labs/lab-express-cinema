const mongoose=require("mongoose") //import mongoose dependencie

const movieSchema= new mongoose.Schema({
    title: {type: String, require: true, unique: true},
    director: {type: String}, 
    stars: {type: Array},
    image: {type: String}, 
    description: {type: String},
    showtimes: {type: Array},
})

movieModel=mongoose.model("Movie", movieSchema)
module.exports=movieModel; 


