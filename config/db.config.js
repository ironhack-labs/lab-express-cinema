const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/movies-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((x) =>{
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => console.log(err));

