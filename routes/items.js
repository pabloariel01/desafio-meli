const express = require('express');
const router = express.Router();

const itemsController =require('../controllers/items')

router.get('/items/:id', itemsController.getItemById);
router.get('/items', itemsController.getItems);
//added in order to enable breadcrumb in detailed view and dont brack endpoint contracts
router.get('/items/:id/categories', itemsController.getItemCategories);

module.exports = router;
