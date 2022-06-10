const {Schema,model,SchemaType}= require("mongoose")

const movieSchema= new Schema({

    title:String,
    director:String,
    stars:[String],
    image:String,
    description:String,
    showtimes:[String],
    
},{timestamps:true})

module.exports= model("MOVIE",movieSchema)