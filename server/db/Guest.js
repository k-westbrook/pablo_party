const Sequelize = require('sequelize')
const db = require('./db')

const Guest = db.define('guest', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Guest
