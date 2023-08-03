const { Schema, model } = require('mongoose');

const cinemaSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description:String,
        showtime:[String]
    },
    {
        timestamps: true
    }
);

module.exports = model('Movie', cinemaSchema)