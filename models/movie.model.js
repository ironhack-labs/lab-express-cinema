const {Schema, model} = require ('mongoose')

const movieSchema = new Schema (
    {
        title: {
            type: String,
            unique: true,
            required: true,
            default: ' titulo desconocido',
        },

        director: {
            type: String,
            required: true,
            default: ' direct@r desconocid@',
        },

        stars: {
            type: [String],
        },

        image: {
            type: String,
            default: 'https://images.media-allrecipes.com/images/75131.jpg'
          
        },
          
        description: {

            type: String,
            required: true,
            default: 'Pendiente de descripción',
        },
        
        showtimes: {
            type: [String],
            required: true,
            default: 'Estableciendo horas',
        }

    }


);

module.exports = model('Movie', movieSchema)