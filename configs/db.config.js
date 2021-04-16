const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose
  .connect(`mongodb://localhost/${process.env.DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((result) => {
    console.log(chalk.green.inverse(`Connected to database: ${result.connections[0].name}.`))
  })
  .catch((err)=>{
    console.log(chalk.red.inverse('Error connecting to mongo', err))
  })
  
