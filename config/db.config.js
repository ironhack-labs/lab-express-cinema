const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/express-cinema";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.info(
      `Application successfully connected to the database ${MONGODB_URI}`
    );
  })
  .catch((error) =>
    console.error(
      `An error occurred trying to connect to the database ${MONGODB_URI}`
    )
  );
