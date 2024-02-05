const express = require('express')
const app = express()

const db = require('./database')

app.use(express.json())

db.sequelize.sync()

app.listen(3000, () => {
  console.log('connected to server successfully');
})