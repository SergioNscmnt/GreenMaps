var DataTypes = require("sequelize").DataTypes;
var _assets = require("./assets");
var _cidades = require("./cidades");
var _comentarios_pontos_de_coleta = require("./comentarios_pontos_de_coleta");
var _descartes = require("./descartes");
var _estado = require("./estado");
var _map_pins_usuarios = require("./map_pins_usuarios");
var _mtm_comentarios = require("./mtm_comentarios");
var _mtm_imagens_lixeira = require("./mtm_imagens_lixeira");
var _mtm_pins = require("./mtm_pins");
var _mtm_tipos_de_lixo = require("./mtm_tipos_de_lixo");
var _pontos_de_coleta = require("./pontos_de_coleta");
var _tags = require("./tags");
var _tipos_de_lixo = require("./tipos_de_lixo");
var _tipos_de_pins = require("./tipos_de_pins");
var _tipos_de_ponto = require("./tipos_de_ponto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var assets = _assets(sequelize, DataTypes);
  var cidades = _cidades(sequelize, DataTypes);
  var comentarios_pontos_de_coleta = _comentarios_pontos_de_coleta(sequelize, DataTypes);
  var descartes = _descartes(sequelize, DataTypes);
  var estado = _estado(sequelize, DataTypes);
  var map_pins_usuarios = _map_pins_usuarios(sequelize, DataTypes);
  var mtm_comentarios = _mtm_comentarios(sequelize, DataTypes);
  var mtm_imagens_lixeira = _mtm_imagens_lixeira(sequelize, DataTypes);
  var mtm_pins = _mtm_pins(sequelize, DataTypes);
  var mtm_tipos_de_lixo = _mtm_tipos_de_lixo(sequelize, DataTypes);
  var pontos_de_coleta = _pontos_de_coleta(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var tipos_de_lixo = _tipos_de_lixo(sequelize, DataTypes);
  var tipos_de_pins = _tipos_de_pins(sequelize, DataTypes);
  var tipos_de_ponto = _tipos_de_ponto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  mtm_imagens_lixeira.belongsTo(assets, { as: "id_asset_asset", foreignKey: "id_asset"});
  assets.hasMany(mtm_imagens_lixeira, { as: "mtm_imagens_lixeiras", foreignKey: "id_asset"});
  tipos_de_pins.belongsTo(assets, { as: "icone_asset", foreignKey: "icone"});
  assets.hasMany(tipos_de_pins, { as: "tipos_de_pins", foreignKey: "icone"});
  tipos_de_ponto.belongsTo(assets, { as: "icone_asset", foreignKey: "icone"});
  assets.hasMany(tipos_de_ponto, { as: "tipos_de_pontos", foreignKey: "icone"});
  usuario.belongsTo(assets, { as: "avatar_asset", foreignKey: "avatar"});
  assets.hasMany(usuario, { as: "usuarios", foreignKey: "avatar"});
  usuario.belongsTo(cidades, { as: "cidade_cidade", foreignKey: "cidade"});
  cidades.hasMany(usuario, { as: "usuarios", foreignKey: "cidade"});
  mtm_comentarios.belongsTo(comentarios_pontos_de_coleta, { as: "id_comentario_comentarios_pontos_de_coletum", foreignKey: "id_comentario"});
  comentarios_pontos_de_coleta.hasMany(mtm_comentarios, { as: "mtm_comentarios", foreignKey: "id_comentario"});
  cidades.belongsTo(estado, { as: "estado_estado", foreignKey: "estado"});
  estado.hasMany(cidades, { as: "cidades", foreignKey: "estado"});
  usuario.belongsTo(estado, { as: "estado_estado", foreignKey: "estado"});
  estado.hasMany(usuario, { as: "usuarios", foreignKey: "estado"});
  mtm_pins.belongsTo(map_pins_usuarios, { as: "id_pin_map_pins_usuario", foreignKey: "id_pin"});
  map_pins_usuarios.hasMany(mtm_pins, { as: "mtm_pins", foreignKey: "id_pin"});
  comentarios_pontos_de_coleta.belongsTo(pontos_de_coleta, { as: "ponto_coleta_pontos_de_coletum", foreignKey: "ponto_coleta"});
  pontos_de_coleta.hasMany(comentarios_pontos_de_coleta, { as: "comentarios_pontos_de_coleta", foreignKey: "ponto_coleta"});
  descartes.belongsTo(pontos_de_coleta, { as: "id_ponto_de_coleta_pontos_de_coletum", foreignKey: "id_ponto_de_coleta"});
  pontos_de_coleta.hasMany(descartes, { as: "descartes", foreignKey: "id_ponto_de_coleta"});
  mtm_imagens_lixeira.belongsTo(pontos_de_coleta, { as: "id_lixeira_pontos_de_coletum", foreignKey: "id_lixeira"});
  pontos_de_coleta.hasMany(mtm_imagens_lixeira, { as: "mtm_imagens_lixeiras", foreignKey: "id_lixeira"});
  mtm_tipos_de_lixo.belongsTo(pontos_de_coleta, { as: "id_ponto_de_coleta_pontos_de_coletum", foreignKey: "id_ponto_de_coleta"});
  pontos_de_coleta.hasMany(mtm_tipos_de_lixo, { as: "mtm_tipos_de_lixos", foreignKey: "id_ponto_de_coleta"});
  descartes.belongsTo(tipos_de_lixo, { as: "id_tipo_lixo_tipos_de_lixo", foreignKey: "id_tipo_lixo"});
  tipos_de_lixo.hasMany(descartes, { as: "descartes", foreignKey: "id_tipo_lixo"});
  mtm_tipos_de_lixo.belongsTo(tipos_de_lixo, { as: "id_tipo_de_lixo_tipos_de_lixo", foreignKey: "id_tipo_de_lixo"});
  tipos_de_lixo.hasMany(mtm_tipos_de_lixo, { as: "mtm_tipos_de_lixos", foreignKey: "id_tipo_de_lixo"});
  map_pins_usuarios.belongsTo(tipos_de_pins, { as: "tipo_de_pin_tipos_de_pin", foreignKey: "tipo_de_pin"});
  tipos_de_pins.hasMany(map_pins_usuarios, { as: "map_pins_usuarios", foreignKey: "tipo_de_pin"});
  pontos_de_coleta.belongsTo(tipos_de_ponto, { as: "tipo_de_ponto_tipos_de_ponto", foreignKey: "tipo_de_ponto"});
  tipos_de_ponto.hasMany(pontos_de_coleta, { as: "pontos_de_coleta", foreignKey: "tipo_de_ponto"});
  descartes.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(descartes, { as: "descartes", foreignKey: "id_usuario"});
  mtm_comentarios.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(mtm_comentarios, { as: "mtm_comentarios", foreignKey: "id_usuario"});
  mtm_pins.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(mtm_pins, { as: "mtm_pins", foreignKey: "id_usuario"});
  pontos_de_coleta.belongsTo(usuario, { as: "criadop_por_usuario", foreignKey: "criadop_por"});
  usuario.hasMany(pontos_de_coleta, { as: "pontos_de_coleta", foreignKey: "criadop_por"});

  return {
    assets,
    cidades,
    comentarios_pontos_de_coleta,
    descartes,
    estado,
    map_pins_usuarios,
    mtm_comentarios,
    mtm_imagens_lixeira,
    mtm_pins,
    mtm_tipos_de_lixo,
    pontos_de_coleta,
    tags,
    tipos_de_lixo,
    tipos_de_pins,
    tipos_de_ponto,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
