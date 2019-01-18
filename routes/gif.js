const express = require('express')
const router = express.Router()
const controller = require('../controllers/gif')

router
      .get('/:gifname', controller.getGif)
      .post('/', controller.convertToGif)

module.exports = router