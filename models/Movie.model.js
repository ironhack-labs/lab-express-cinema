const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      director: String,
      stars: [String],
      description: String,
      showtimes: [String],
      image: String
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const movieModel = mongoose.model("Movies", movieSchema);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents



module.exports = movieModel;