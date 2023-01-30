// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

// register partials
hbs.registerPartials(`${__dirname}/../views/partials`)

// register active helper for nav
//hbs.registerHelper('helper_name', (ar1, arg2, options) => {...});
// hbs.registerHelper('navActive', (currentPath, desiredPath) => {
//   return currentPath === desiredPath ? 'active': ''
// });


// register date helper for tweets
