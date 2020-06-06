const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiItems = require('./api/routes/Items');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiItems);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
