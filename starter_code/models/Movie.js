const {model, Schema} = require('mongoose')

const moviesSchema = Schema(
  {
    title : String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Movie', moviesSchema)