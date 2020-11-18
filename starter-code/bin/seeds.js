const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//  Celebrity.insertMany(celebrities)
//   .then(result => {
//     console.log('Seed successfull');
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(`An error occured: ${err}`);
//   });

  const movies = [
    {
      title: "Bonnie and Clyde",
      genre: "politician",
      plot: "Ich will hier rein",
      cast: [
        {
        name: "Harrison Ford",
        occupation: "Actor",
        catchPhrase: "I hate snakes"
        },
        {
        name: "Samuel L. Jackson",
        occupation: "Actor",
        catchPhrase: "Say what again"
        }
      ]
    },
    {
      title: "The Seven Samurai",
      genre: "Fight",
      plot: "Ich will hier rein",
      cast: [
        {
        name: "Leonardo diCaprio",
        occupation: "Actor",
        catchPhrase: "I'm the king of the world"
        },
        {
        name: "Samuel L. Jackson",
        occupation: "Actor",
        catchPhrase: "Say what again"
        }
      ]
    },
    {
      title: "Rocky",
      genre: "Boxing",
      plot: "Ich will hier rein",
      cast: [
        {
        name: "Silvester Stalone",
        occupation: "Actor",
        catchPhrase: "I hate snakes"
        }
      ]
    }
  ];

  movies.forEach(movie => {
    Celebrity.create(movie.cast).then(dbCelebrity => {
      //console.log(dbCelebrity);
      movie.cast = dbCelebrity._id;
      
      Movie.create(movie);
    });
  });


  // Movie.insertMany(movies)
  // .then(result => {
  //   console.log('Seed successfull');
  //   mongoose.connection.close();
  // })
  // .catch(err => {
  //   console.log(`An error occured: ${err}`);
  // });