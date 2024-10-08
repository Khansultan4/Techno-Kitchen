const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'UserId' });
    }
  }
  Message.init(
    {
      text: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
