
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    title: String,
    director: String,
    star: [String],
    image: String,
    description: String,
    showtimes: [String],
},
    {
        timestamps: true
    });

const User = model("User", userSchema);

module.exports = User;



