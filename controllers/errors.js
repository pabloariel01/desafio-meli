exports.get404Error = (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
};

exports.getError=(error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      code: error.status,
      message: error.message
    }
  });
};