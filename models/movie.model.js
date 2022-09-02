const movieSchema = new Schema({
    title: { type: String },
    director: { type: String },
    stars: [{ type: String }],
    image: { type: Date },
    description: { type: String },
    showtimes: [{ type: String }]
});

const movieModel = model('movies', movieSchema);

module.exports = movieModel;