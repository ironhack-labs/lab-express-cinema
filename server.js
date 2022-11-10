const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
