const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: {
            type: String,
            default: 'https://images3.persgroep.net/rcs/jfdKtM-Wnf9GRoRx2u5KDNMYy5k/diocontent/172288366/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8'
        },
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true,
    }
);

module.exports = model('Movie', movieSchema);