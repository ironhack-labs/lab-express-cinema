const mongoose  = require("mongoose")


const movieSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  });

const Blog = mongoose.model('Movie', movieSchema);
module.exports = Blog;
