const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');
const errorHandler = require('./middleware/error-handler');
const responseHandler = require('./middleware/response-handler');

const app = express();

app.use(bodyParser.json());
app.use(responseHandler);
app.use('/', routes);
app.use(errorHandler);
module.exports = app;
