const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    // TODO: write the schema
    title :{ type: String, required: true , unique: true },
    director : String ,
    stars: Array,
    image: String,
    description: String,
    shwotimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;