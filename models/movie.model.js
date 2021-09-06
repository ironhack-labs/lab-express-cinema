const { Schema, model } = require('mongoose');
 
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [string],
    image: url,
    description:String,
    showTimes:[number]
  },
  {
    timestamps: true
  }
);
 
module.exports = model('movie', movieSchema);