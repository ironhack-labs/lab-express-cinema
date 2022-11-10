const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
        title: {
          type: String,
          required: true,
          minlength: 2
        },
        director: {
          type: String,
          minlength: 2
        },
        stars: {
          type: [String]
        },
        image: {
            type: String
        },
        description: {
            type: String,
            minlength: 2
        },
        showtimes: {
            type:[String]
        }
      
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Movie', movieSchema);