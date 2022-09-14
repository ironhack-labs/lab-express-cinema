// {
//     title: "The Strangers: Prey at Night",
//     director: "Johannes Roberts",
//     stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
//     image:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     description:
//       "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
//     showtimes: ["13:50", "16:20", "19:20", "22:10"]
//   },

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    unique: true,
  },
  director: String,
  stars: {
    type: [String],
  },
  image: String,
  description: String,
  showtimes: {
    type: [String],
  },
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = { Movie };