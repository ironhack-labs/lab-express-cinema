//1. Importaciones

const mongoose          =require("mongoose");


//2.SCHEMA

const movieSchema       =mongoose.Schema({

    title:String,
    director:String,
    stars:[String],
    image:String,
    description:String,
    showtimes:[String]



},{
    timestamps:true //Inserta en la base de datos la fecha
})

//3.MODEL

const Movie=mongoose.model("Movie",movieSchema)


//4.EXPORTACION
module.exports=Movie