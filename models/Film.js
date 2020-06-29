const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;