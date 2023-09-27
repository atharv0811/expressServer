const express = require('express');
const router = express.Router();
const successController = require('../controllers/successController')

router.get('/success', successController.success);

module.exports = router;