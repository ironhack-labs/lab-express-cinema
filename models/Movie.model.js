const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
      },
    description: String,
    showtimes: [String]
});

const MovieModel = mongoose.model('Movie', movieSchema);
module.exports = MovieModel;