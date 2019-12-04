const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((allThemovies)=>{
    res.render('movies', {theMovies: allThemovies});
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/add-new-movie', (req, res, next)=>{
  res.render('new-movie');
})

router.post('/create-the-movie', (req, res, next)=>{
  let theTitle = req.body.theNewMovieTitle;
  let theDirector = req.body.theDirector;
  let img = req.body.img;
  let theDescription = req.body.theDescription;


  Movie.create({
    title: theTitle,
    director: theDirector,
    description: theDescription,
    image: img
  })
  .then((res)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/movies/:theIdOfTheMovie', (req, res, next)=>{
  let id = req.params.theIdOfTheMovie;

  Movie.findById(id)
  .then((theMovie)=>{
    res.render('single-movie', {movie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})
// temp to add all movies to compass
// router.get('/pop', (req, res, next)=>{
//   const movies = [
//     {
//       title : "A Wrinkle in Time",
//       director: "Ava DuVernay",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "Following the discovery of a new form of space travel as well as Meg’s father’s disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
//     },
//     {
//       title : "The Strangers: Prey at Night",
//       director: "Johannes Roberts",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "A family’s road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family’s every limit as they struggle to survive.",
//     },
//     {
//       title : "The Hurricane Heist",
//       director: "Rob Cohen",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
//     },
//     {
//       title : "Gringo",
//       director: "Nash Edgerton",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
//     },
//     {
//       title : "Thoroughbreds",
//       director: "Cory Finley",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
//     },
//     {
//       title : "The Leisure Seeker",
//       director: "Paolo Virzì",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
//     },
//     {
//       title : "Black Panther",
//       director: "Ryan Coogler",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "T’Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T’Challa’s father’s mistake.",
//     },
//     {
//       title : "Red Sparrow",
//       director: "Francis Lawrence",
//       image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description: "Ballerina Dominika Egorova is recruited to ‘Sparrow School,’ a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//     }
//   ];
//   Movie.create(movies)
//   .then((response)=>{
//     console.log("success")
//     res.render("index")
//   })
//   .catch((err)=>{
//     next(err)
//   })
// })


module.exports = router;
