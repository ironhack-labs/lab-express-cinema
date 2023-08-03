const mongoose = require("mongoose");


const schema = new mongoose.Schema(
    {
      title: { type: String },
      director: { type: String },
      stars: { type: [String] },
      image: { type: String },
      description: { type: String },
      showtimes:{type: [String]}
    },
    {
      timestamps: true,
    }
  );

  const Movie = mongoose.model("Movie", schema);
  module.exports = Movie;
