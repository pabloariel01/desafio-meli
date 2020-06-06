const express = require('express');
const app = express();

const apiItems = require('./routes/Items');
const errorController= require('./controllers/errors')

app.use('/api', apiItems);

app.use(errorController.get404Error);
module.exports = app;