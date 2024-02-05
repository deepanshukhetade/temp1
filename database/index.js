const Sequelize = require('sequelize')
const config = require("../config/index")

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  port: config.DB_PORT
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

// db.user = require()

module.exports = db