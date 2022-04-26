const {Schema, model} = require("mongoose")

const Movie = new Schema({
    title:String,
    director:String,
    stars:[String],
    image:String,
    description:String,
    showtimes:[String]
})

module.exports = model("Movie",Movie)