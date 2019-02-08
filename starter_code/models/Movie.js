let mongoose = require ('mongoose')
let Schema = mongoose.Schema

let movieSchema = new Schema ({
    title : String,
    director: String,
    stars : Array,
    image: String,
    description: String,
    showtimes: Array
})

module.exports = mongoose.model ('Movie', movieSchema)