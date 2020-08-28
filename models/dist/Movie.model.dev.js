"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

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