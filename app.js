const express = require('express');
const logger = require('./logger');
const morganMiddleware = require('./morganMiddleware');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morganMiddleware);

app.get('/', (req, res) => {
  logger.info("hello world");
  // logger.error("hello world");
  // logger.warn("hello world");
  // logger.debug("hello world");
  // logger.verbose("hello world");
  // logger.silly("hello world");
  res.send('Hello, Express')
  
});

app.get('/transactions', (req, res) => {
  logger.info("GET /transactions/");
  res.send('GET /transactions/ page');
});

app.get('/reservations', (req, res) => {
  logger.info("GET /reservations/");
  res.send('GET /reservations/ page');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
});