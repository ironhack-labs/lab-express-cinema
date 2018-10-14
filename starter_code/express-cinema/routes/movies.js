const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const movieSchema = require('../models/Movie');

mongoose.connect('mongodb://localhost/movieApp')
  .then(() => {
    console.log('Connected to Mongo!');
    
  }).catch(err => {
    console.error('Error connecting to mongo', err);

  });

const Movie = mongoose.model('Movie', movieSchema);

/* GET movies listing. */
router.get('/', (req, res, next) => {
  // res.send('Estamos en movies');
  Movie.find()
  .then((movies) => {
    res.render('movies',{movies});
    console.log(movies);
  })
  .catch(error => {
    console.log(error);
  })

});

// router.get('movie/:id/', (req,res) =>{
//    res.send(`${req.params.id}`);
//    const id = req.params.id;
//    Movie.findById(id)
//     .then((movie) => {
//         res.render('movieDetail', {movie: movie})
//     })
// })

// Usaremos el método findById()
router.get('/movie/:id', (req, res) => {
  
  // res.send(`${req.params.id}`);
  const id = req.params.id;
    Movie.findById(id)
      .then((movie) => {
          res.render('movieDetail', {movie: movie})
      })
})

// Añadir película, parte que muestra el formulario con GET
router.get('/add', (req, res) => {

  res.render('addMovie');
})

// Añadir película. Parte de envío con POST
router.post('/add', (req,res) => {
  let title = req.body.title;
  let director = req.body.director;
  let stars = req.body.stars;
  let description = req.body.description;
  let image = req.body.image;
  let showTimes = req.body.showTimes;

  if (image === ''){
    image = '/images/not-found.png';
  }
  if (director === ''){
    director = '';
  }
  if (stars === ''){
    stars = '';
  }
  if (description === ''){
    description = '';
  }
  if (showTimes === ''){
    showTimes = '';
  }
  if (title === ''){
    title = '';
  }



  const newMovie = new Movie ({
    title: title,
    director: director,
    stars: stars,
    description: description,
    image: image,
    showtimes: showTimes,
  });

  // Movie.insertOne(newMovie)
  newMovie.save()
  .then((resultado) => {
    console.log('Película introducida');
    res.render('successMovie')
  })
  .catch((error) => {
    console.log('No ha podido introducir la película',error);
  });
})

// Para eliminar una película

router.get('/delete', (req, res) => {
  Movie.find()
  .then((movies) => {
    res.render('moviesDeleteList',{movies});
    console.log(movies);
  })
  .catch(error => {
    console.log(error);
  })

})

router.get('/delete/:id', (req, res) => {
  
  // res.send(`${req.params.id}`);
  const id = req.params.id;
    Movie.findById(id)
      .then((movie) => {
        Movie.deleteOne(movie)
        .then(() => {
          res.render('successMovieDelete'); //, {movie: movie})
        })
        .catch((error) => {
          console.log('No se ha podido eliminar', error);
        })    
      })
      .catch((error) => {
        console.log('Película no encontrada.', error);
      })
})


// Para realizar el Update

// Listado de las pekículas
router.get('/update', (req, res) => {
  Movie.find()
  .then((movies) => {
    res.render('moviesUpdateList',{movies});
    console.log(movies);
  })
  .catch(error => {
    console.log(error);
  })

});

// Muestro el formulario con las películas
router.get('/update/:id', (req,res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
        console.log('Entra en el update');
        res.render('movieDetailUpdate', {movie: movie})
    })
    .catch((error) =>{
      console.log('Error al mostrar para update', error);
    });

});

// Actualizo la película.
router.post('/update', (req,res) => {
  const id = req.body.id;
  let title = req.body.title;
  let director = req.body.director;
  let stars = req.body.stars;
  let description = req.body.description;
  let image = req.body.image;
  let showTimes = req.body.showTimes;

  if (image === ''){
    image = '/images/not-found.png';
  }
  if (director === ''){
    director = '';
  }
  if (stars === ''){
    stars = '';
  }
  if (description === ''){
    description = '';
  }
  if (showTimes === ''){
    showTimes = '';
  }
  if (title === ''){
    title = '';
  }



  const newMovie = new Movie ({
    title: title,
    director: director,
    stars: stars,
    description: description,
    image: image,
    showtimes: showTimes,
  });


 // Movie.insertOne(newMovie)
 Movie.updateOne(
   {title: title},
   { 
     $set: {
          title: title, 
          director: director, 
          stars: stars, 
          description: description, 
          image: image,
          showtimes: showTimes,
    }
  })
  .then((resultado) => {
   console.log('Película Actualizada');
   console.log(resultado);
   res.render('successMovie')
 })
 .catch((error) => {
   console.log('No ha podido Actualizar la película',error);
 });
})


module.exports = router;

