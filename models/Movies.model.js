const mongoose = require("mongoose");
const { Schema, model} = mongoose;
const movieSchema = new Schema(
    {
        title: {type: String, unique: true},
        director: String,
        stars: {type: [String], default: undefined},
        image: String,
        description: String,
        showtimes: {type: [String],default: undefined},
    },
    {
        timestamps: true,
    }
);

module.exports = model("movie", movieSchema);

