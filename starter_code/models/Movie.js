const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchemas = new Schema({
  title: { type: String, unique: true, required: true },
  director: { type: String, required: true },
  stars: { type: [String], minlength: 3 },
  image: { type: String, required: true },
  description: { type: String, required: true },
  showtimes: { type: [String], minlength: 5 }
})
