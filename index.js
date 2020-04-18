// @flow
const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./src/utils/logger');
require('./config');

const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
  logger.info(req.body);
});

app.listen(port, () => {
  logger.info(`Thunderstore server is listening on ${port}`);
});
