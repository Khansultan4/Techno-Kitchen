'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        UserId: 7,
        text: 'как на этом сайте собрать игровой ноутбук',
      },
      {
        UserId: 3,
        text: 'никак.',
      },
      {
        UserId: 4,
        text: 'всем доброго вечера ребята',
      },
      {
        UserId: 4,
        text: 'подскажите пожалуйста как удалить комментарий свой',
      },
      {
        UserId: 6,
        text: 'нажми на корзинку справа и он удалится',
      }
    ])
  
  },

  async down(queryInterface, Sequelize) {
    await queryInterface('Messages', null, {});
  },
};
