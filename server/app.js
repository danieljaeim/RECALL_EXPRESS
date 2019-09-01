const express = require('express');
const ExpressError = require('./helpers/ExpressError');
const champRouter = require('./routes/champions');
const itemRouter = require('./routes/items');
const cors = require('cors');

const app = express(); 
app.use(express.json());
app.use(cors()); 

/* APP ROUTES */
app.use('/champion', champRouter);
app.use('/items', itemRouter);

/* 404 Handler */
app.use((req, res, next) => {
  let err = new ExpressError("Not Found", 404);

  //passes the error to the error handler
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500); 
  console.error(err.stack);

  return res.json({
    status: err.status, 
    message: err.message
  });
});

module.exports = app; 

