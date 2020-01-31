const { model, Schema } = require("mongoose");

const movieSchema = new Schema(
  {
    title:{
      type:String,
      unique:true
    },
    director: String,
    stars: Array,
    image:String,
    description:String,
    showtimes:Array
  }
);

module.exports = model("Movie", movieSchema);
