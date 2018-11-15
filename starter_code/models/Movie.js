const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title : String,
    director: String,
    stars: [],
    image: String,
    showtimes: []
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
});

const Movie = mongoose.model('Cat', catSchema);
module.exports = Movie;