const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
    stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});


// below : user is the collection name (mongo will append a s to user => users)
const MovModel = mongoose.model("movies", movieSchema);

module.exports = MovModel; // is an object containing all usefull function for CRUD

//  one user structure :  { name: "foo", email: "foo@foo.foo", favLang: "JS" },
