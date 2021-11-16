const { Schema, Mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type:String, required:true,unique:true},
  director: {type:String,required:true},
  stars: [String],
  image:{type:String},
  description: {type:String},
  showtime: [String]

}, {versionKey:false,timestamps:true})

const Movie = moongose.model ('Movie',movieSechema);

module.exports = Movie;



