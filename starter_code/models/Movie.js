const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique : true
        },
    director:{type: String,
                required: true},
    stars: {type: Array
            },
    image: String,
    description: String,
    showtimes: Array
  }, 
  {timestamps : true  }
  );


module.exports =  mongoose.model("Movie", movieSchema);