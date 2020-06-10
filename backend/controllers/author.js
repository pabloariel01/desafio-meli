const authorFactory = require('../models/author')

exports.addAuthor = (req, res, next) => {
  try {
    const author = { author: authorFactory() };
    const response = Object.assign({}, res.locals.appData, author);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
