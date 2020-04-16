const mongoose = require('mongoose');

const Movie = require('./models/Movie');
const data = require('./bin/seeds');
const MONGODB_URI = "mongodb://localhost:27017/starter-code";

// Connection to the database "recipe-app"
mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then((self) => {
        console.log(`Connected to Mongo! Database name: "${self.connections[0].name}"`);
        return self.connection.dropDatabase();
    })
    .then(() => {
        async function test() {
            try {
                await Movie.insertMany(data)
                    .then((dbResp) => console.log('Database seeded perfectly !'))
                    .catch((err) => console.log(err));
            } catch (err) {
                console.log(err);
            }
        }
        test();

    })
    .catch((err) => {
        console.error('Error connecting to mongo', err);
    })