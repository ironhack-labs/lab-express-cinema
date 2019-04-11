const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.module = mongoose.model('movie', new Schema({
  title: String,
  director: String,
  starts: Array,
  image: String,
  description: String,
  showtimes: Array,
}));