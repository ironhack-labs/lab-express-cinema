const mongoose = require('mongoose');
const process = require('process');

mongoose
    .connect('mongodb://localhost:27017/express-cinema-dev', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x =>
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch(err => console.error('Error connecting to mongo', err));

//cerrar la conexcion .close
process.on('SIGINT', () => {
    mongoose.connection
        .close()
        .then(() => console.log('Connection disconnected'))
        .catch(error => console.log('Error disconnecting', error))
        .finally(() => process.exit());
})