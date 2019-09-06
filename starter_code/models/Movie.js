const { model, Schema } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

module.exports = model('Movie', movieSchema);
