// title: "A Wrinkle in Time",
// director: "Ava DuVernay",
// stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
// image:
//l-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_A//   "https://images-na.ssL_.jpg",
// description:
//   "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
// showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
// }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: [String],
  image: { type: String },
  description: { type: String },
  showtimes: [String]
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
