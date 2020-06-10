const search = require('../models/search');
const itemDetails = require('../models/item-details');
const categoryDetails= require('../models/search-categories')

exports.getItemById = (req, res, next) => {
    const itemId = req.params.id;
    itemDetails(itemId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      next(error)
    });

};

exports.getItems = (req, res, next) => {
    const query = req.query.q;
    search(query)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      next(error)
    });
};


exports.getItemCategories = (req, res, next) => {
    const itemId = req.params.id;
    categoryDetails(itemId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      next(error)
    });

};