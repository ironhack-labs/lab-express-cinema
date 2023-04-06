const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");


//const Schema = mongoose.Schema;

const charSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const CharModel = mongoose.model("movies", charSchema);
module.exports = CharModel;




