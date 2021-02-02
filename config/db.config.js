const mongoose = require('mongoose');
const process = require("process");

mongoose
.connect("mongodb://localhost:27017/movies")
.then(() => console.log("Successfully connected to the DB"))
.catch((e) => console.error("Error connecting to the DB", e));

  process.on("SIGINIT", () => {
    mongoose.connection
    .close()
    .then(() => console.log("Succsessfully disconnected from DB"))
    .catch((e) => console.error("Error disconnectig from the DB", e))
    .finally(() => process.exit())
  })
