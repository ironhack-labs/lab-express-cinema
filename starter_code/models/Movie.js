const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title:{type:String, default:"ironMovie"},
  director:String,
  stars:Array,
  image:String,
  description:String,
  showtimes:Array
})


module.exports = mongoose.model('Movie',MovieSchema);