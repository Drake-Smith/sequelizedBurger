'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    review: { type: DataTypes.STRING, allowNull: false }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Rating.hasOne(models.Burger)
      }
    }
  });
  return Rating;
};