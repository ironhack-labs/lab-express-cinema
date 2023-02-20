const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: false
    },
    director: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    stars: [],

      image: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      showtimes: [],

  }
);

const Movie = model("Movie", movieSchema);

<<<<<<< HEAD
module.exports = Movie;
=======
module.exports = Movie;
>>>>>>> bc2ec5d1ff71498237900829b708aaa2a1abe94c
