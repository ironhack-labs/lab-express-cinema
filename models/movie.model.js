const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        shorwTimes: [String],
    },
    {
        timeStamps: true,
    }
);

const Movie = mongoose.model('Movie', moviesSchema);
module.exports = Movie