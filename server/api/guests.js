const router = require('express').Router()
const { Guest } = require('../db')

router.get('/', (req, res, next) => {
  Guest.findAll()
    .then(guest => res.json(guest))
    .catch(next)
})

module.exports = router
