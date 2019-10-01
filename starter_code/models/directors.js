const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  fullName: String
})

const Director = mongoose.model("director", directorSchema);

module.exports = Director;