const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: String,
  description: String,
  showtime: Array
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionkey:false
})

module.exports = mongoose.model('Movie', movieSchema);