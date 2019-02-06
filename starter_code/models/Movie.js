const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Movie schema using the Mongoose "Schema" class
const movieSchema = new Schema(
  {
    // document structure & rules defined here
    title: { type: String, required: true },
    director: { type: String },
    stars: { type: [String] },
    image: { type: String }, // add a match: urlRegexp
    description: { type: String },
    showtimes: { type: [String] }
  }
  // ,
  // {
  //   // additional settings for the Schema class here
  //   timestamp: true
  // }
);

// use the schema to create the Movie model (it has the methods for db queries)
// "Movie" model -> "movie" collection
const Movie = mongoose.model("Movie", movieSchema);

// share the "Movie" model with other parts of the app
module.exports = Movie;

// {
//     title : "A Wrinkle in Time",
//     director: "Ava DuVernay",
//     stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
//     showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
//   }
