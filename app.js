// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
import dotenv from 'dotenv'
dotenv.config()


// ℹ️ Connects to the database

import {} from './db/index.js'

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
import express from 'express';

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
//require('./config')(app);
import { config } from "./config/index.js"
config(app)

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
import { router } from './routes/index.js'
app.use('/', router);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes

import { errorHandling } from './error-handling/index.js'
errorHandling(app)

export { app }
