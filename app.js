const serverless = require('serverless-http');
const express = require('express');
const { sequelize } = require('./models');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var fixedRouter = require('./routes/fixed_spending');
var categoryRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
var pointRouter = require('./routes/point');

var app = express();

// Database Connection
async function connectionTesting() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectionTesting();

app.use(express.json());

// Route
app.use('/api/v1/', indexRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/fixed_spending', fixedRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/brand', brandRouter);
app.use('/api/v1/point', pointRouter);


module.exports = app;
module.exports.handler = serverless(app);