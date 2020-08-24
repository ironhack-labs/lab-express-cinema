"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema,
    model = mongoose.model;
var movieSchema = new Schema({
  title: {
    type: String
  },
  director: {
    type: String
  },
  stars: {
    type: [String]
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  showtimes: {
    type: [String]
  }
}, {
  timestamps: true
});
module.exports = model("Movie", movieSchema);