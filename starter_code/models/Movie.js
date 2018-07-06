const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String
    },
    director:String,
    stars: [String],
    image: String,
    description: String,
    showtimes:[String],
    created:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

module.exports = mongoose.model('Movie', movieSchema);