const mongoose = require ('mongoose')
const { Schema, model } = mongoose;

const MovieSchema = new Schema(
{
    title: {type: String},
    director:{type: String},
    stars:[String],
    image:{type: String},
    description:{type: String},
    showtimes:[String],
}
)

module.exports = model('Movie',MovieSchema)