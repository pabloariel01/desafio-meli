const search = require('../services/search');
const itemDetails = require('../services/item-details');
const categoryDetails= require('../services/search-categories')

exports.getItemById = (req, res, next) => {
    const itemId = req.params.id;
    itemDetails(itemId)
    .then((item) => {
      res.locals.appData = item;
      next()
    })
    .catch((error) => {
      next(error)
    });

};

exports.getItems = (req, res, next) => {
    const query = req.query.q;
    search(query)
    .then((result) => {
      res.locals.appData=result
      next()
    })
    .catch((error) => {
      next(error)
    });
};


exports.getItemCategories = (req, res, next) => {
    const itemId = req.params.id;
    categoryDetails(itemId)
    .then((item) => {
      res.locals.appData = item;
      next()
    })
    .catch((error) => {
      next(error)
    });

};