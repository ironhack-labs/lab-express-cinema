const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [ String ],
    image: {
        type: String,
        default:
            "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    description: String,
    showtimes: [ String ]
});

 const movieModel = mongoose.model("movie", movieSchema);

 module.exports = movieModel;