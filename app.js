require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const app = express();

require('./config/db.config');

require('./config/hbs.config');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`))
//los static se ponen antes que los otros "use" para que se cargue primero

app.use(logger('dev'));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
})

const routes = require('./config/routes.config');
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application is running at port ${port}`));
