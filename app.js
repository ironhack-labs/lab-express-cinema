require('dotenv/config');
require('./config/db.config');
const express = require('express');
const path = require('path');
const app = express();

//Esto será necesario para cuando haga formularios/hacer un post: 
//app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", __dirname + '/views');
app.set('view engine', 'hbs');

const routes = require('./config/routes.config');

app.use('/', routes);

app.listen(3000, () => {
    console.info("Listen to port: 3000")
});