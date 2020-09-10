const mongoose = require("mongoose");

 
const movieSchema = new mongoose.Schema({
    title: {
        type:String,
        // required:true
      },
    director: {type:String},
    stars: {type:[String]},
    image: {type:String},
    description: {type:String},
    showtimes:{type:[String]},
    rating: {type:Number}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});
 
const Movie = mongoose.model("Movie", movieSchema);
 
module.exports = Movie;