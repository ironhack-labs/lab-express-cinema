require('dotenv').config();
const hbs= require('hbs')
// Database
require('./configs/mongoose.config')
const path = require('path');
// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()
hbs.registerPartials(`${__dirname}/views/partials`)

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Routes index
require('./routes')(app)

module.exports = app              
            