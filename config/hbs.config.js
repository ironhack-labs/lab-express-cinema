const hbs = require('hbs');

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper('navActive', (currentPath, desiredPath) => {
  return currentPath === desiredPath ? 'active' : ''
});
