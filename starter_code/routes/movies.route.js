const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Movie = mongoose.model("Book", bookSchema);

module.exports = Book;