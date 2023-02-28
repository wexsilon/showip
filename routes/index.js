const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.all('/', indexController);

module.exports = router;