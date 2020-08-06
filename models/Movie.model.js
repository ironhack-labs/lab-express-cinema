const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
      title: String,
      director: String,
      stars: [String],
      image: String,
      description: String,
      showtimes: [String]
    },
    {
      timestamps: true
    }
  );
  // const Author = model('Author', authorSchema);
  // module.exports = Author;
  module.exports = model('Movie', movieSchema); 