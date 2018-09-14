const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  director: String,
  starts: String,
  image:{
    type:String
},
  description:String,
  showtimes:String
  },
 {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;

