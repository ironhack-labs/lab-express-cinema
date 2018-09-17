const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  image: String,
  title: String,
  director:String,
  description: String,
  stars: [
    {
      type: String
    }
  ],
  showtimes: [
    {
      type: String
    }
  ]
}, 
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Movie', movieSchema)