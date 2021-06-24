const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.models')
//importante requerir el modelo el objeto a buscar.... mucha pérdida de tiempo con esto

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {


    Movie
        .find()
        .select('title')
        .select('image')
        //select uno por uno dado que solo puede tomar un argumento por llamada( en caso de querer llamar más de una propiedad)
        .then(peliculas => {

            const {title, image} = peliculas
           res.render('movies', { peliculas })
           
        })
        .catch(err => console.log(err))
})

router.get('/movieDetails/:movie_id' , (req, res) =>{
//nos requerimos el id mediante el enlace en la view listado de movies con {{id}} como -param-, id siempre presente para poder usarlo.
    const {movie_id} = req.params
    //de los params(movieDetails y movie_id nos quedamos con el segundo para idetinficar la película de la cual queremos desplegar los detalles en esta view)
    Movie
        .findById(movie_id)
        .then(pelicula => {
            res.render('movieDetails', pelicula )
            //ya tenemos elegida una peli en particular con el id asiq no hay q pasar nada a objeto porque ya lo es
        })
        .catch(err => console.log(err))
})





module.exports = router;
