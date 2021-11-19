
const { Schema, model } = require("mongoose");

// Tomas --> In 2 lines
//const mongoose = require("mongoose");
//const movieSchema = new mongoose.Schema({ })

// TODO: Please make sure you edit the model based on the properties that will received
// Define schema
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

// export the model
// model receives 2 arguments 
// --> name of the new Collection, Mongoose is going to make it plural
// --> name of the Schema created

// Tomas --> In 2 lines
// const Movie = mongoose.model("Recipe", RecipeSchema);
// module.exports = Movie;


// option 2
// const Movie = model("Movie", movieSchema);
// module.exports = Movie;

//option 3 --> one line
module.exports = model("Movie", movieSchema);
