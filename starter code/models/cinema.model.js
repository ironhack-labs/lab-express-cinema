const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Campo obligatorio"],
        unique: true
    },

    director: {
        type: String,
        required:true
    },

    stars: {
        type: [String]
        // Le indicamos que es un Array de Strings, sino solo pondríamos Array
    },

    image: {
        type: String,
        default:"http://www.newtonnews.co.uk/wp-content/uploads/2017/10/Film-roll.jpg",
    },

    description: {
        type: String,
        minlength: 10,
    },

    showtimes: {
        type: [String]
    }
});

const CinemaConst = mongoose.model("CinemaBBDDCarpeta", cinemaSchema);
// ("Cinema", cinemaSchema) Cinema es el nombre que recibirá documento BBDD

module.exports = CinemaConst;