'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Serie.init({
    nombre: {type: DataTypes.STRING, allowNull: false},
    temporadas: { type:DataTypes.NUMBER, allowNull: false},
    plataforma: {type: DataTypes.STRING, allowNull: false},
    esDisponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Serie',
    timestamps: false,
  });
  return Serie;
};