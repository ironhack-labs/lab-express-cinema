// file that will allow you to connect to the dateBase

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/express-cinema-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
