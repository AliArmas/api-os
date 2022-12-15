const express = require('express');

const router = express.Router();

const imageController = require('../../controllers/')

router.get('/',imageController.getAllImages);





module.exports = router;