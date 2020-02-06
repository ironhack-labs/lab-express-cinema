const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  },
  { timestamps: true }
);

const Model = mongoose.model("Movie", schemaName);
module.exports = Model;
