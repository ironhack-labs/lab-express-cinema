const { Schema, model } = require("mongoose")
const movieSchema = new Schema({
  title: String,
  stars : String,
  image : String,
  description : String,
  showtimes : String 
},
{
  timestamps: true,
  versionKey: false

})

module.exports = model("Movie", movieSchema)