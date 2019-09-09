const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const movieSchema=Schema({title:String,
director:String,
stars:Array,
image:String,
description:String,
showtimes:Array,
});

const Movie = mongoose.model("movie", movieSchema);
module.exports=Movie;

