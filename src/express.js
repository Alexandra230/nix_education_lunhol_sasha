const express = require('express');
const app = express();
const mongotest = require('./connection/mongoDB.js');
const router = require('./routers/routers.js');
const host = 'localhost';
const port = 8000;

mongotest();
app.use('/', router);
app.use(express.urlencoded({ extended: true }));
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  console.log(err.message);
  res.send({ error: err.message });
}
app.use(errorHandler);

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
