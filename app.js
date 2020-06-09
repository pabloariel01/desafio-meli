const express = require('express');
const app = express();
var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

const apiItems = require('./routes/Items');
const errorController= require('./controllers/errors')
app.use(cors(corsOptions))
app.use('/api', apiItems);

app.use(errorController.getError);

app.use(errorController.get404Error);
module.exports = app;