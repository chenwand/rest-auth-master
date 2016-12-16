var mongoose = require('mongoose');

var DestinoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  cidade: String,
  pais: String,
  classificacao:Number,
  tipo: String        
});

module.exports = mongoose.model('Destino', DestinoSchema);
