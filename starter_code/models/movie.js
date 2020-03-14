const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema(
  {
    title: { type: String, unique: true },
    director: { type: String },
    stars: { type: Array },
    image: { type: String, default: "https://radionadlanu.stream/assets/images/imdbnoimage.jpg" },
    description: { type: String},
    showtimes: { type: Array },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;



