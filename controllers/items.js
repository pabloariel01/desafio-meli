const search = require('../models/search');
const itemDetails = require('../models/item-details');
const categoryDetails= require('../models/search-categories')

exports.getItemById = (req, res, next) => {
  try{

    const itemId = req.params.id;
    itemDetails(itemId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      res.sendStatus(400)
    });
  }catch(e){
    console.log(e)
    res.sendStatus(400)
  }
};

exports.getItems = (req, res, next) => {
  try{

    const query = req.query.q;
    search(query)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(400)
    });
  }catch(e){
    res.sendStatus(400)
  }
};


exports.getItemCategories = (req, res, next) => {
  try{

    const itemId = req.params.id;
    categoryDetails(itemId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      res.sendStatus(400)
    });
  }catch(e){
    console.log(e)
    res.sendStatus(400)
  }
};