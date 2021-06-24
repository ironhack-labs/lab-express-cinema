
require('dotenv/config')

require('./db')

const express = require('express')
const app = express()

const hbs = require('hbs')
app.set('views', __dirname + '/views')

require('./config')(app)

const projectName = 'lab-express-cinema'

const index = require('./routes/index')
app.use('/', index)


require('./error-handling')(app)

module.exports = app
