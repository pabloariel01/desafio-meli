const express = require('express');
const app = express();
var cors = require('cors')

const apiItems = require('./routes/Items');
const errorController= require('./controllers/errors')
const apiAuthor = require('./routes/author')


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }


app.use(cors(corsOptions))

app.use('/api', apiItems);
app.use('/api', apiAuthor);

app.use(errorController.getError);

app.use(errorController.get404Error);
module.exports = app;