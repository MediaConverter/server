var express = require('express');
var router = express.Router()
const imgController = require('../controllers/img')
const images = require('../middlewares/image')

router.post('/', images.multer.single('file'), images.sendUploadToGCS, imgController.removeBg)

module.exports = router;
