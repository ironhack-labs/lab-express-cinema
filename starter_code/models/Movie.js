
const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
    unique : true,
  },

  director :  {
    type : String,
    required : true,
  },
  stars : [],
  image : {
    type : String,
    default : 'https://66.media.tumblr.com/6903a8a3304b187a763d031f05cf843b/tumblr_p4kulk3FD01vp5j01o1_540.jpg',
  },

  description:  String,

  showtimes: [],
},
{

  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },


});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
