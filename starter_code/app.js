require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const hbs = require('hbs');
const bodyParser = require("body-parser");

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the DB"))
  .catch(err => console.log(err));

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser({ extended: false }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


const mainRoutes = require("./routes");
    app.use("/", mainRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
