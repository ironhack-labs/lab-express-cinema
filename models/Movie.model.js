const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    director: {
        type: String
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    }, 
    description: {
        type: String
    }, 
    showtimes: {
        type: [String]
    }
})

module.exports = mongoose.model("Movie", MovieSchema)