const {Schema,model} = require("mongoose")
const movieSchema = new Schema({
    title:{type: String,required: true,unique: true},
    director:{type: String,required: true},
    stars:[String],
    image:{type:String, validate:{
    validator: (text)=> text.includes("https://images-na.ssl-images-amazon.com"),
    message:"Your url image must start https://images-na.ssl-images-amazon.com" }},
    description:String,
    showtimes:[String]
})
const Movie = model("Movie",movieSchema)
module.exports = Movie