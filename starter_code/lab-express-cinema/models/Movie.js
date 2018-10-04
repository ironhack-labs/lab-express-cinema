const
  mongoose = require(`mongoose`),
  Schema = mongoose.Schema,

  movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
  },
  {
    timestamps: {
      createdAt: `created_at`,
      updatedAt: `updated_at`
    }
  })
;

module.exports = mongoose.model(`Movie`, movieSchema);