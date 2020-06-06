const express = require('express');
const router = express.Router();

router.get('/items:id', (req, res, next) => {
  console.log(req);
  res.status(200).json({
    message: `tagId is set to " + ${req.param("id")}`,
  });
});
router.get('/items', (req, res, next) => {
  console.log(req);
  res.status(200).json({
    message: `"tagId is set to " + ${req.query("tagId")}`,
  });
});

module.exports = router;
