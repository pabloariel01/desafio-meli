const express = require('express');
const router = express.Router();

const itemsController =require('../controllers/items')

router.get('/items/:id', itemsController.getItemById);
router.get('/items', itemsController.getItems);

module.exports = router;
