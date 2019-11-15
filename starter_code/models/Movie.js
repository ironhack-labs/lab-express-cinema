const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: Number,
  description: String,
  showtime: Array
});

const Model = mongoose.model("Movies", schemaName);

module.exports = Model;
