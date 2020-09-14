const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/grocery.list.controller.js');

router.post('/create', groceryController.create);

module.exports = router;
