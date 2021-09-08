require('./config')(app);

// default value for title local

// const projectName = 'lab-express-cinema';
// const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();


// app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

// const movies = require('./routes/movies');
// app.use('/', movies);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);