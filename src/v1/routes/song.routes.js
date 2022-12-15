const express = require('express');

const router = express.Router();

const songControler = require('../../controllers/songController')

router
    .get('/',songControler.allSongs)
    
    .get('/:songId',songControler.getSongId)  

module.exports = router;
