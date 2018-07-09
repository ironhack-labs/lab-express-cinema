
const express = require('express');
const router  = express.Router();

// thats the way to the model we created
const Movie   = require ('../models/movie');

// to post movies as an array 

router.get('/', (req, res, next)=>{
    Movie.find()
    .then((listOfMovies)=>{
    res.render('movies', {moviesArray: listOfMovies});
    })
    .catch((err)=>{
        res.send(err);
    })
})

// to post movie with the body model

// router.post('/movie', (req, res, next)=>{
//     res.send(req.body);
// })


// create new movie


router.get('/create', (req, res, next)=>{
    res.render('newMovie')
})

router.post('/newMovie', (req, res, next)=>{

//  const newmovie = new Movie(req.body)

    const newmovie = new Movie({
     title: req.body.title,
     director: req.body.director,
     rating: req.body.rating,
     description: req.body.description,

    })
//  ^ this is super fancy mode, use if you dare

newmovie.save()
.then((response)=>{
    res.redirect('/movies')
})
.catch((err)=>{
    next(err);
}) 

})


// create an array of stars on the page on the page

// req.body.option = req.body.option.map(item => 
//     (Array.isArray(item) && item[1]) || null);

// var x = 0;
// const starsArray = moviesArray [3];

// router.add_element_to_array('/create', (req, res, next)=>{
//  array[x] = Movie.getElementById(req.body.value);
//  alert("stars: " + starsArray[x] + " Added at index " + x);
//  x++;
//  Movie.getElementById(req.body.value) = "";
// })
   
// router.display_array('/create', (req, res, next)=>{
// var e = "<hr/>";   
// for (var y=0; y<starsArray.length; y++)
//    {
//      e += "Stars" + y + " = " + starsArray[y] + "<br/>";
//    }
//    Movie.getElementById("Result").innerHTML = e;
// })


// edit movie

router.get('/:id/editMovie', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{

        // res.render takes a file from vies folder and puts it up
        res.render('editMovie', {moviezz: theMovie})
    })
    .catch((err)=>{
        next(err);
    }) 
 })

// update edited movie
// router.get('movies/)

router.post('/:id/update', (req, res, next)=>{
const movieID = req.params.id;
const editedMovie = {
    title: req.body.title,
    director: req.body.director,
    rating: req.body.rating,
    description: req.body.description
}
// movie.findByIdAndUpdate(req.body)
    Movie.findByIdAndUpdate(movieID, editedMovie)
    .then(()=>{
        res.redirect('/movies/' + movieID)
    })
    .catch((err)=>{
        next(err);
    })  
})


// get the movie by id

router.get('/:id', (req, res, next)=>{
    const id = req.params.id
    Movie.findById(id)
    .then((theMovie)=>{
        res.render('movie', {movie: theMovie})
    })
    .catch((err)=>{
        res.send(err);
    })

});

// delete movie

router.post('/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err);
    })
})



module.exports = router;
