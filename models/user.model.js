const { Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("USer", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })
  return User
}