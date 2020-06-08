const search = require('../models/search');
const itemDetails = require('../models/item-details');

exports.getItemById = (req, res, next) => {
  const itemId = req.params.id;
  itemDetails(itemId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(400)
    });
};

exports.getItems = (req, res, next) => {
  const query = req.query.q;
  search(query)
  .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
        console.log(error)
        res.sendStatus(400)
    });
};

