require('dotenv/config')

const Movie = require('../models/Movie.model')
const data = require('./movies-data.json')
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

const connectDB = async () => {
  console.log('Tentando conectar ao banco de dados...');
  try {
    const x = await mongoose.connect(MONGO_URI);
    console.log(`Conectado ao banco de dados: ${x.connections[0].name}`);
  } catch (error) {
    console.error('Erro ao conectar banco de dados!', error);
  }
};

const createMoviesInDB = async () => {
  console.log('Inserindo informações no banco de dados...');
  try {
    const moviesFromDB = await Movie.create(data);
    console.log(`Foram inseridos ${moviesFromDB.length} filmes no banco de dados.`)
  } catch (error) {
    console.error('Erro ao inserir filmes no banco de dados', error);
  }
};

const seed = async () => {
  try {
    await connectDB();
    await Movie.collection.drop();
    await createMoviesInDB();
    mongoose.connection.close();
    console.log('Encerrada conexão.')
  } catch (error) {
    console.error('Erro ao executar o script.', error)
  }
};

seed();
