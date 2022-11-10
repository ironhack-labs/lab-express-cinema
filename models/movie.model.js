// To insert in "seeds/movies.seed.js"


// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

// ... your code here
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtime: [String],
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Movie', movieSchema);