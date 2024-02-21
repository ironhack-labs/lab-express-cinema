const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema (
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [3, 'Title needs at least 3 chars']
        },
        director: {
            type: String,
        },
        stars: {
            type: [String]
        },
        image: {
            type: String,
            //required: [true, 'Image is required'],
            /* validate: {
                validator: function(value) {
                    try{
                        new URL(value);
                        return true;
                    } catch (error) {
                        return false;
                    }
                },
                message: 'Invalid image URL' 
            }
            */
        },
        description: {
            type: String,
        },
        showtimes: {
            type: [String],
        }
    },
    {timestamps: true}
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;