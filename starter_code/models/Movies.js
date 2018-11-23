const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: 'string',
    director: 'string',
    stars: Array,
    image: 'string',
    description: 'string',
    description: Array,
},{
    timestamp:{
        createdAt: true,
        updatedAt: true
    },
    versionkey: false
})

module.exports = mongoose.model('Movie',movieSchema)