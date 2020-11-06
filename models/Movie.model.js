
const {Schema,model} =require('mongoose')

// dont get if i repeat line 1 and 3?
const mongoose=require('mongoose')


const movieSchema= new mongoose.Schema({
    title:String,
    director:String,
    stars:String,
    image:String,
    description:String,
    showtimes:String,

});

// don´t get if  18 line is necessary??
const Movie=mongoose.model('Movie',movieSchema)

module.exports=model("Movie",movieSchema)