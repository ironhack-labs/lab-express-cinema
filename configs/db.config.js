const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://localhost/${process.env.DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${process.env.DB_NAME}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
