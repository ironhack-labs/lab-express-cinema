const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String, 
  director: String,
  stars: [
    {
        type:String
    }
  ],
  image: String,
  description: String,
  showtimes: [
    {
        type:String
    }
  ]
}, {
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Movie', movieSchema)