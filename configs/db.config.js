const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((self) => {
    console.log(`Connected to Mongo! Database name: "${self.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  });