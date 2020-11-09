const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: { type: String, unique: true},
        director: String,
        stars: { type : [String] },
        image: String,
        description: String,
        showtimes: { type: [string] },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Movie", movieSchema);