require('../config/db.config');
const mongoose = require('mongoose')
const modelCinema = require('../models/cinema.model');
const cinemaData = require('../data/cinema.data');

modelCinema.insertMany(cinemaData)
    .then(haSalidoBien => {
        console.info('Películas insertadas en la BBDD')
        mongoose.connection.close()
    })
    .catch(
        algoHaFallado => { 
        next(algoHaFallado);
        mongoose.connection.close();
        console.error('Revísalo, algo ha fallado')
        })

// Mongoose, el modelo y data sí van en una constante porque lo vamos a llamar después