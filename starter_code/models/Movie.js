const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const moviesSchema = new Schema(
{
  title:        {type: String},
  director:     {type: String},
  stars:        {type: Array},
  image:        {type: String},
  description:  {type: String},
  showtimes:    {type: Array},
}, 
{
  timestamps: 
  {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;