const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, unique: true },
  director: { type: String },
  stars: { "type": "array",
        "maxItems": 3,
        "items":{
            "type": "string"
        }},
  image: {type: String},
  description: {type: String},
  showtimes: { "type": "array",
        "maxItems": 5,
        "items":{
        "type": "string"
        }}
    }); 

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;