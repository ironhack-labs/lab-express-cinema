const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title : String,
    director: String,
    stars: [String],
    image: {
        type: String,
        default: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    description: String,
    showtimes: [String],

});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;