//setup
const mongoose = require("mongoose");
const Movie = require('../models/Movie.js');
const fakeData = require('./movies.json');
// require json file

// connect
mongoose
	.connect('mongodb://localhost/express-cinema', {
		useNewUrlParser: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

Movie.insertMany(fakeData, function (err, result) {
	if (err) {
		console.log("Could not import data", err);
	} else {
		// handle success
		console.log(`Sucessfully imported ${result.length} movies 💅💅💅💅`);
	}
});