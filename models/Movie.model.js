const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
  title: {type: String},
  director: {type: String},
  stars: {type: Array},
  image: {type: String},
  description:{type: String},
  showtimes: {type: Array}
}, {versionKey: false, timestamps: true});

module.exports = mongoose.model('Movie', movieSchema);