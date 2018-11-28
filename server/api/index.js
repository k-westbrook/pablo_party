const router = require('express').Router()

router.use('/guests', require('./guests'))

module.exports = router
