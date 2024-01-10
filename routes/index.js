const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then((result)=>{
        res.render('movies', {movies: result})
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get('/movies/:theID', (req, res, next) =>{
    Movie.findById(req.params.theID)
    .then((result)=>{
        res.render('movie-detail', {movie: result})
    })
    .catch((err)=>{
        console.log(err);
    })
});


// const movies = [
//     {
//       title: "The Hurricane Heist",
//       director: "Rob Cohen",
//       stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
//       showtimes: ["13:10", "15:40", "18:20", "20:50", "23:10"]
//     },
//     {
//       title: "Gringo",
//       director: "Nash Edgerton",
//       stars: ["Joel Edgerton", "Charlize Theron", "David Oyelowo"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
//       showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
//     },
//     {
//       title: "Thoroughbreds",
//       director: "Cory Finley",
//       stars: ["Anya Taylor-Joy", "Olivia Cooke", "Anton Yelchin"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
//       showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
//     },
//     {
//       title: "The Leisure Seeker",
//       director: "Paolo Virzì",
//       stars: ["Helen Mirren", "Donald Sutherland", "Janel Moloney"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
//       showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
//     },
//     {
//       title: "Black Panther",
//       director: "Ryan Coogler",
//       stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//       showtimes: ["13:50", "16:20", "19:20", "22:10"]
//     },
//     {
//       title: "Red Sparrow",
//       director: "Francis Lawrence",
//       stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//       showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
//     }
//   ];
  
// Movie.create(movies);

module.exports = router;
