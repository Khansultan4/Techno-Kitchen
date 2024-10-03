'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({User, Build}) {
      this.belongsTo(User)
      this.belongsTo(Build)
    }
  }
  Comment.init({
    UserId: DataTypes.NUMBER,
    BuildId: DataTypes.NUMBER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};