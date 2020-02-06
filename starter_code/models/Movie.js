const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []
  },
);

const Model = mongoose.model("Movie", schemaName);
module.exports = Model;