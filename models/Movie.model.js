//import mongoose
const { Schema, model } = require("mongoose");
//Write my own schema usingg ({estructura}},{optional?: timestamp:true})
const movieSchema = new Schema(
  {
    //aqui va nuestra estructura
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
    //example of what could go here:      * __owner:[{tyoe:Schema.Types.ObjectId,ref:"User"}]
  },
  { timestamps: true }
);

//Exports
// const Movie = model("movie", movieSchema); module.exports = Movie; we do both lines in one step
module.exports = model("MOVIE", movieSchema);
