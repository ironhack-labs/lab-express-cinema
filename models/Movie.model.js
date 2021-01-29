const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [String],
    image: {
        type: String,
		validate: {
			validator: (text) => {
				return text.startsWith("http");
			},
			message: "URL must start with HTTP/HTTPS"
		},
    },
    description: {
        type: String,
        required: true,
    },
    showtimes: [String]
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie