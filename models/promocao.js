'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promocao.hasMany(models.Compra, {foreignKey: 'PromocaoId', as: 'compras'});
      Promocao.belongsTo(models.Empresa, {foreignKey: 'EmpresaId', as: 'empresas'});
      Promocao.belongsToMany(models.Cartao, {foreignKey: 'CartaoId',
        through: 'Compra', as: 'cartaos_promo'
      });
    }
  }
  Promocao.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    validade: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Promocao',
  });
  return Promocao;
};