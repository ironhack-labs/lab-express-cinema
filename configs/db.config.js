const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/lab-express-cinema";

mongoose.connect(MONGO_URI) 
    .then(() => console.info(`Succesfully connected to ${MONGO_URI}`))
    .catch((error) => console.error('Error: ' + error));
