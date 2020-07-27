const mongoose = require('mongoose');
const dbName = 'express-cinema-project';
mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
