//Movie model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: [String],
        required: true
    }
});

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;