const db = require("../config/db.config.js");
const PontosDeColeta = db.models.pontos_de_coleta;

// Cria um ponto de coleta
exports.criar = (req, res) => {
  // Salva para o banco de dados
  PontosDeColeta.create({
    nome: req.body.nome,
    descricao: req.body.descricao,
    loc_geo_latitude: req.body.loc_geo_latitude,
    loc_geo_longitude: req.body.loc_geo_longitude,
    tipo_de_ponto: req.body.tipo_de_ponto,
    ativo: req.body.ativo,
    criadop_por: req.body.criadop_por,
  })
    .then((pontos_de_coleta) => {
      // Retorna o Ponto de Coleta criado para o cliente
      res.status(200).json(pontos_de_coleta);
    })
    .catch((error) => res.status(400).send(error));
};

// Lista todos os pontos de coleta
exports.buscarTodos = (req, res) => {
  PontosDeColeta.findAll(req.params.id)
    .then((pontos_de_coleta) => {
      res.status(200).json(pontos_de_coleta);
    })
    .catch((error) => res.status(400).send(error));
};

// Busca por ID
exports.buscarPorId = (req, res) => {
  PontosDeColeta.findByPk(req.params.id)
    .then((pontos_de_coleta) => {
      if (!pontos_de_coleta) {
        return res
          .status(404)
          .json({ message: "Ponto de Coleta não encontrado!" });
      }
      return res.status(200).json(pontos_de_coleta);
    })
    .catch((error) => res.status(400).send(error));
};

//Realiza o Update
exports.update = (req, res) => {
  return PontosDeColeta.findByPk(req.params.id)
    .then((pontos_de_coleta) => {
      if (!pontos_de_coleta) {
        return res.status(404).json({
          message: "Não foi possível atualizar o Ponto de Coleta",
        });
      }
      return pontos_de_coleta
        .update({
          nome: req.body.nome,
          descricao: req.body.descricao,
          loc_geo_latitude: req.body.loc_geo_latitude,
          loc_geo_longitude: req.body.loc_geo_longitude,
          tipo_de_ponto: req.body.tipo_de_ponto,
          ativo: req.body.ativo,
          criadop_por: req.body.criadop_por,
        })
        .then(() => res.status(200).json(pontos_de_coleta))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  return PontosDeColeta.findByPk(req.params.id)
    .then((pontos_de_coleta) => {
      if (!pontos_de_coleta) {
        return res.status(400).send({
          message: "Ponto de Coleta inexistente",
        });
      }

      return pontos_de_coleta
        .destroy()
        .then(() => res.status(200).json({ message: "Deletado com Sucesso" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
