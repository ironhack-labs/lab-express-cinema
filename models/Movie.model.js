const { Schema, model } = require(`mongoose`)

const movieScheme = new Schema(

    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: [String],
        showtimes: [String]

    },

    {
        timestamps: true
    }

);

module.exports = model('Movie', movieScheme) // esta movie de aquí es la carpeta movies de mongo, la que se usa.