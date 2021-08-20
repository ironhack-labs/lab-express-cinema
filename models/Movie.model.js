const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [
      {
        type: String,
      },
    ],
    image: String,
    description: String,
    showtimes: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

// * Making the model available for requiring it
module.exports = model("Movie", movieSchema);
