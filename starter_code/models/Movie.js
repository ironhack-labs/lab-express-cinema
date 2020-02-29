const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
title:{
  type: String,
  required: true
},
director: String,
stars: Array,
image: String,
description: String,
showtimes: Array
});

const Movie = mongoose.model('Movie', recipeSchema);
module.exports = Movie;