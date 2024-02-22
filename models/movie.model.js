const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required']
        },
        director: {
            type: String
        },
        stars: [String],
        image: {
            type: String,
            validate: {
                validator: function (value) {
                    try {
                        new URL(value);
                        return true;
                    } catch (error) {
                        return false;
                    }
                },
                message: 'Invalid image URL'
            }
        },
        description: {
            type: String
        },
        showtimes: [String]
    },
    { timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;