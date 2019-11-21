const { model, Schema } = require("mongoose");

const productSchema = new Schema(
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

module.exports = model("Movie", productSchema);