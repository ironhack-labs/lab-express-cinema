const {model, Schema} = require('mongoose')

const MovieSchema = Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]

},
{
  versionsKey: false,
  timestamps: true
}
)

module.exports = model('Movie', MovieSchema)