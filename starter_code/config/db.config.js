const mongoose = require('mongoose');
const moviesDB = 'mongodb://localhost/lab-express-cinema';
mongoose
  .connect(moviesDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
