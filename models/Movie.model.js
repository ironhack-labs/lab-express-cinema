const {Schema, model} = require("mongoose");

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [{
        type: String,
        required: true,
    }],
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1573339886303-e2ee2fcad317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    description: {
        type: String,
    }, 
    showtimes: [{
        type: String,
    }]
})

module.exports = model("Movie", movieSchema);