//conectamos modelo con mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creamos modelo de objeto
const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
}); 

//creamos variable del modelo de Movie
const Movie = mongoose.model("Movie", movieSchema);
//lo exportamos para poder utilizarlo a nivel global.
module.exports = Movie;