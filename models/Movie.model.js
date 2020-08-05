const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
    
  },
  {
    timestamps: true
  }
);
// const Author = model('Author', authorSchema);
// module.exports = Author;
module.exports = model('Movie', movieSchema);