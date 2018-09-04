const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: { type: String, required: true },
    director: {type: String, required: true },
    stars: {type: Array}, 
    image: {type: String},
    description:{ type: String, minlength:8 }, 
    showtimes: {type: Array, minlength: 1 }
}, {
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie; 