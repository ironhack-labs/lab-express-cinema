const mongoose = require("mongoose");

const Director = mongoose.model("director", {
    name: String,
    image_url: String,
    image_url_url: String,
    biography: String
});

module.exports = Director