const chalk = require('chalk');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(x =>
    console.log(chalk.yellow.inverse.bold(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  )
  .catch(err => console.error('Error connecting to mongo', err));
