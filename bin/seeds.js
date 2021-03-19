//chama conexão do banco
require('../configs/db.config');
//arquivo a ser inserido no bd
const MovieData = require('../Data/Movie.data');
//chamar o schema que eu vou inserir o arquivo
const MovieModel = require('../Model/Movie.model');


MovieModel.insertMany(MovieData)
  .then(() => console.log('filemes inseridos'));




