
const {model, Schema} = require ("mongoose")
const MovieSchema = new Schema ({
    title: String,
    director: String, 
    stars: Array,
    image: String,
    description: String,
    showTime: Array,
})

module.exports = model("movie", MovieSchema)