const mongoose = require ('mongoose')
const movieSchema = new require('mongoose').Schema({

  title: String,
  director:String,
  stars:Array,
  image:String,
  description: String,
  showtimes:Array
},{
  timestamps:{
    createdAt: true,
    updatedAt: true,
  },
  versionkey:false // esto solo porque Diego dice que se ve feo el _V...
})


module.exports = mongoose.model('Movie', movieSchema)