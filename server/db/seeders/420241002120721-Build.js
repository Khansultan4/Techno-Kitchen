'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Builds', 
        [
          {
            UserId: "6",
            image: "https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg",
            title: "Робокоп",
            description: "Компьютер для настоящих мужчин",
          },
          {
            UserId: "2",
            image: "https://hyperpc.ru/images/product/lumen/teaser/green-table/content/hyperpc-original-dual-green.jpg",
            title: "Игровой ПК",
            description: "Топовый игровой ПК i7 + 4080 (Intel Core i7-13700F, RAM 64 ГБ, SSD 3000 ГБ, NVIDIA GeForce RTX 4080 (16 Гб), Windows 10 Pro), черно-серый",
          },
          {
            UserId: "3",
            image: "https://hyperpc.ru/images/product/workstation/g5/pc/hyperpc-pro-g5.jpg",
            title: "Рабочая станция",
            description: "Компьютер предназначен для работы с ресурсоемкими приложениями",
          },
        ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Builds', null, {});
     
  }
};


