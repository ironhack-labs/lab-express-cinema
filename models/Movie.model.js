const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: {
        type: String,
        //default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    description: String,
    showtimes: [String]
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie