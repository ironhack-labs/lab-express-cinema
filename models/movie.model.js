const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({ 
 title: {
    type: 'String', 
    require: 'Movie title is required'
 },
 director: {
    type: 'String', 
 },
 stars: {
    type: 'array',
 },
 image: {
    type: 'string',
},
showtimes: {
    type: 'array',
},
});   

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
