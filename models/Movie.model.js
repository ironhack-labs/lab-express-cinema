const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: Array },
    image: { type: String },
    description: { type: String, required: true },
    showtimes: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
