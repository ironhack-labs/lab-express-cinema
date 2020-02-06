const mongoose = require("mongoose");

function dbConnect(cb) {
    mongoose
      .connect("mongodb://localhost/movies", { useNewUrlParser: true, useUnifiedTopology: true })
      .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        cb();
      })
      .catch(err => {
        console.error("Error connecting to mongo", err);
      });
}

