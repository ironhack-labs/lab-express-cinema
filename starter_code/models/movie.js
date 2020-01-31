const {model, Schema}= require ('mongoose')
const moviesch = new Schema ({
  title : String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
})

module.exports =model("movie", moviesch)