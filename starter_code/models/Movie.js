const { model, Schema } = require('mongoose')

const movieSchema = Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
      type: String
    },
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Movie', movieSchema)
