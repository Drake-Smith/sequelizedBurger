'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Burger.bulkCreate(
      [
        {burger_name: "Cali Burger"},
        {burger_name: "Bro Burger"},
        {burger_name: "Good Burger"},
        {burger_name: "Big Mac"},
        {burger_name: "Double Double"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Burger.destroy({where:{burger_name: [
      "Cali Burger",
      "Bro Burger",
      "Good Burger",
      "Big Mac",
      "Double Double"
      ]}})
    
    // queryInterface.changeColumn(
    //   'Burgers',
    //   'id',
    //     {
    //         allowNull: false,
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: Sequelize.INTEGER,
    //     }
    // )
  }
};
