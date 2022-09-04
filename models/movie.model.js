const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: { type: String, unique: true, required: true },
    director: { type: String },
    stars: [{ type: String }],
    image: { type: String },
    description: { type: String },
    showtimes: [{ type: String }]
}, {
    timestamps: true,
    versionKey: false
});

const moviesModel = model('movies', movieSchema);

module.exports = moviesModel;