//Movie model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String
});

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;