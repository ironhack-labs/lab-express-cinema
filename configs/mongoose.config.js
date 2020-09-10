const mongoose = require('mongoose')
const dbname = 'MOVIESDB'
mongoose
    .connect(`mongodb://localhost/${dbname}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose