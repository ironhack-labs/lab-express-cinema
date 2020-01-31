const {model, Schema} = require('mongoose')

const movieSchema = new Schema({
        title : {
            type: String,
            require: true
        },
        director: {
            type: String,
            require: true
        },
        stars: {
            type: Array,
            required: true
        },
        image: {
            type: String,
        },
        description: {
            type: String
        },
        showtimes: {
            type: Array,
            default: ['Movie no longer avalaibles in theatres sogry!']
        }
})

module.exports = model('Movie', movieSchema)