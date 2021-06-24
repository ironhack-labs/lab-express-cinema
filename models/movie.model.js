const mongoose = require("mongoose")

const cinemaSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}, {
    timestamps: true
})

const Cinema = mongoose.model("Cinema", cinemaSchema)

module.exports = Cinema