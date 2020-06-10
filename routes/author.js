
const express = require('express');
const router = express.Router();
const authorController =require('../controllers/author')

router.use( authorController.addAuthor);

module.exports = router;
