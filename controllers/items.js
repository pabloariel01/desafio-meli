exports.getItemById = (req, res, next) => {
  console.log(req.param);
  res.status(200).json({
    message: `tagId is set to " + ${req.param('id')}`,
  });
};

exports.getItems = (req, res, next) => {
  console.log(req.query);
  res.status(200).json({
    message: `"tagId is set to " + ${req.query}`,
  });
};
