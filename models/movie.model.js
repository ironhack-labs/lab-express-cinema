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
    type: 'image',
},
showtimes: {
    type: 'array',
},
});   

const Movies = mongoose.model('Movie', movieSchema);
module.exports = Movie;
