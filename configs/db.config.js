const mongoose = require('mongoose');
const process = require('process');

// Connection to the database "recipe-app"
mongoose
  .connect('mongodb://localhost:27017/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    // Before adding any documents to the database, let's delete all previous entries
    console.log(`Connected to Mongo! Database name: "${self.connections[0].name}"`)
    // return self.connection.dropDatabase();
  })
  .catch(err => console.error('Error connecting to mongo', err));

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });