const mongoose = require('mongoose');

const Movie = require('../models/movie');
 
const dbName = 'Express-Cinema';

mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
      title: 'A Wrinkle in Time',
      director: 'Ava DuVernay',
      stars: ['Storm Reid', 'Oprah Winfrey', 'Reese Witherspoon'],
      image:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      showtimes: ['13:00', '15:30', '18:00', '20:10', '22:40']
    },
    {
      title: 'The Strangers: Prey at Night',
      director: 'Johannes Roberts',
      stars: ['Christina Hendricks', 'Bailee Madison', 'Martin Henderson'],
      image:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
      showtimes: ['13:50', '16:20', '19:20', '22:10']
    },
    {
      title: 'The Hurricane Heist',
      director: 'Rob Cohen',
      stars: ['Toby Kebbell', 'Maggie Grace', 'Ryan Kwanten'],
      image:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.',
      showtimes: ['13:10', '15:40', '18:20', '20:50', '23:10']
    },
    {
      title: 'Gringo',
      director: 'Nash Edgerton',
      stars: ['Joel Edgerton', 'Charlize Theron', 'David Oyelowo'],
      image:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.',
      showtimes: ['13:40', '15:50', '19:00', '21:20', '23:50']
    },
    {
      title: 'Thoroughbreds',
      director: 'Cory Finley',
      stars: ['Anya Taylor-Joy', 'Olivia Cooke', 'Anton Yelchin'],
      image:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.',
      showtimes: ['13:00', '15:30', '18:00', '20:10', '22:40']
    }
];
    
          
    // Agregue aquí el script que se ejecutará para inicializar la base de datos (no dude en consultar la lección anterior)
  
  Movie.create(movie, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movie.length} movie`)
    mongoose.connection.close();
  });
  