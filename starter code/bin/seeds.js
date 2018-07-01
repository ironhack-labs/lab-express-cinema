// Mongoose, el modelo y data sí van en una constante porque lo vamos a llamar después
const mongoose = require('mongoose');
require('../config/db.config.js');
const modelCinema = require('../models/cinema.model.js');
const cinemaData = require('../data/cinema.data');

modelCinema.insertMany(cinemaData)
    .then(haSalidoBien => {
        console.info('Películas insertadas en la BBDD')
        mongoose.connection.close()
    })
    .catch(
        algoHaFallado => { next(algoHaFallado)
        console.error('Revísalo, algo ha fallado')
        })