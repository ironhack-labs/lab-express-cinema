const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
    },
    director: {
		type: String,
		required: true,
    },
    stars: {
        type: [String]
    },
    image: {
        type: String,
        validate :{
            validator: (text) => {
                return text.startsWith("http");
            },
            message: "image must be located in internet"
        }
    },
	description: {
		type: String,
		required: true,
    },
    showtimes: {
        type: [String]
    }
});

const Movie = mongoose.model("Movie", movieSchema); // -> posts

module.exports = Movie; 