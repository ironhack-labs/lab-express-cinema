const mongoose = require("mongoose");
const Schema = (mongoose.Schema)

const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  Image: String,
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;





















//////
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const MovieSchema = new Schema({
//   title: String,
//   genre: String,
//   plot: String
// }, {
//     timestamps: {
//       createdAt: "created_at",
//       updatedAt: "updated_at"
//     }
//   });

// const Movie = mongoose.model("movie", MovieSchema);

// module.exports = Movie;