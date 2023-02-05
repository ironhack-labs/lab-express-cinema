const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lab-express-cinema";

mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })