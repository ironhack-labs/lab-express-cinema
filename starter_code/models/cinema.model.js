const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        unique : true
    }, 
    director: {
        type: String, 
        required: true
    }, 
    stars: {
        type: [String]
    }, 
    image: {
        type: String, 
        default: 'https://www.candis.co.uk/wp-content/uploads/2013/08/161764433_hi-res.jpg'

    }, 
    description: {
        type: String, 
        minlength: 10, 
    }, 
    showtimes: {
        type: [String]
    }
});

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema; 