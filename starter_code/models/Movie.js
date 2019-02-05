const mongoose = require("mongoose");
// 1) link the Schema to mongoose
const Schema = mongoose.Schema;

// 2) creates the book Schema using the Mongoose Schema class 
//(you can also do mongoose.Schema in step 1) directly here 
//insted of Schema)
const moviesSchema = new Schema(
  {
    // document structure & rules defined here
    title : {type: String},
    director: {type: String},
    stars: {type: [String]},
    image: {type: String},
    description: {type: String},
    showtimes: [String],
  },
  {
    // additional settings for the Schema class here
    timestamps: true
  }
);

// 3) Use the schema to create the Book model (it has the methods for the database queries)
//"Book" model -> "books" collection
const movies = mongoose.model("Movies", moviesSchema);

module.exports = movies;