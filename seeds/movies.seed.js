const mongoose = require("mongoose");
const Movies = require("../models/Movie.model");
const data = require("../movies.json");

require("../db/index");
mongoose.connection.once("connected", () => {
    mongoose.connection.db
        .dropDatabase()
        .then(() => {
            console.log("Database cleared");

            //para insertar muchos datos , recibe un array
            return Movies.insertMany(data)
        })
        .then((moviesCreated) => console.log(`${moviesCreated.length} movies have been created`))
        .catch((e) => console.error(e))
        .finally(() => {
            mongoose.connection
                .close()
                .then(() => console.log("Finish seeds.js"))
                .catch((e) => console.error(e))
                .finally(() => {
                    process.exit(0);
                });
        });
});