require("dotenv").config()
// on utilise process.env. sans l'avoir declaré >>> connecté

const mongoose = require('mongoose');

mongoose
// .connect('mongodb://localhost/express-cine-lab', {
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
