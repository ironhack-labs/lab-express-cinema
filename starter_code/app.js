require('dotenv').config()


const express = require('express');
const hbs = require('hbs');


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


const mainRoutes = require("./routes");
    app.use("/", mainRoutes);

app.listen(3000, () => console.log("Cinema running on port 3000"));
