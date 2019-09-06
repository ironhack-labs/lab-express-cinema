const {model, Schema} = require ('mongoose')
//Schema es el molde
const moviesSchema = Schema (
  {
  title : String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
}
)

module.exports = model('Movie', moviesSchema)