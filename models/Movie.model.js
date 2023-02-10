const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: {
            type: String,
            default: 'Título no identificado',
            trim: true,
        },
        director: {
            type: String,
            default: 'Director no identificado',
            trim: true,
        },
        stars: {
            type: [String],
        },
        image: {
            type: String,
            default: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
        },
        description: {
            type: String,
            default: 'Descripción no identificada',
        },
        showtimes: {
            type: [String],
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('movie', movieSchema)