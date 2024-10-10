'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          // 1
          login: 'admin',
          email: 'admin@admin.com',
          password: await bcrypt.hash('admin123', 10),
          role: 'admin',
        },
        {
          // 2
          login: 'Pasha',
          email: 'pasha@mail.ru',
          password: await bcrypt.hash('111111', 10),
          role: 'user',
        },
        {
          // 3
          login: 'Техно Князь',
          email: '333@333.com',
          password: await bcrypt.hash('333333', 10),
          role: 'user',
        },
        {
          // 4
          login: 'Люся',
          email: '444@444.com',
          password: await bcrypt.hash('444444', 10),
          role: 'user',
        },
        {
          // 5
          login: 'Вова Вист',
          email: '555@555.com',
          password: await bcrypt.hash('555555', 10),
          role: 'user',
        },
        {
          // 6
          login: 'Гена Букин',
          email: '666@666.com',
          password: await bcrypt.hash('666666', 10),
          role: 'user',
        },
        {
          // 7
          login: 'Ян Шелест',
          email: '777@777.com',
          password: await bcrypt.hash('777777', 10),
          role: 'user',
        },
        {
          // 8
          login: 'Антон Атнагулов',
          email: '888@888.com',
          password: await bcrypt.hash('888888', 10),
          role: 'user',
        },
        {
          // 9
          login: 'Ronald0',
          email: '999@999.com',
          password: await bcrypt.hash('999999', 10),
          role: 'user',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
