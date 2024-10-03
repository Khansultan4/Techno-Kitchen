'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', 
      [
      {
        login: 'admin',
        email: "admin@admin.com",
        password:await bcrypt.hash('admin123', 10),
        role: "admin",
      },
      {
        login: '111',
        email: "111@111.com",
        password:await bcrypt.hash('111111', 10),
        role: "user",
      },      
      {
        login: '222',
        email: "222@222.com",
        password:await bcrypt.hash('222222', 10),
        role: "user",
      },
      ],
    {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
