const app = require("./app");
const http = require('http');

//const server = http.createServer((request, response) => {
  //response.write('hello, world!');
 // response.end();
//});

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
