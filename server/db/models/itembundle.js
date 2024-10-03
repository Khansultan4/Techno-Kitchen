'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemBundle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Build}) {
      this.belongsTo(Build)
    }
  }
  ItemBundle.init(
    {
      BuildId: DataTypes.INTEGER,
      ItemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ItemBundle',
    }
  );
  return ItemBundle;
};
