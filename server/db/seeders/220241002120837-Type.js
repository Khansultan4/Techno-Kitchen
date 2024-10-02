'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Types', 
        [
          {
            title: "Процессор",    
          },
          {
            title: "Видеокарта",    
          },
          {
            title: "Материнская плата",    
          },
          {
            title: "Оперативная память",    
          },
          {
            title: "SSD накопитель",    
          },
          {
            title: "Система охлаждения",    
          },
          {
            title: "Жесткий диск",    
          },
          {
            title: "Блок питания",    
          },
          {
            title: "Корпус",    
          },
          {
            title: "Термоинтерфейс",    
          },
        ], 
      {}
    );
   },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Types', null, {});
     
  }
};
