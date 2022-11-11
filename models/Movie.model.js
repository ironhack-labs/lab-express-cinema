const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        director: {
            type: String,
            trim: true,
            required: true
        },
        stars: [{
            type: String,
            required: true
        }],
        image: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        showtimes: [{
            type: String,
            required: true,
            trim: true
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const MovieModel = model("Movie", movieSchema);

module.exports = MovieModel;