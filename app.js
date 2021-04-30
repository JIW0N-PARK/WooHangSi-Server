const serverless = require('serverless-http');
const express = require('express');
const { sequelize } = require('./models');

var indexRouter = require('./routes/index');
var fixedRouter = require('./routes/fixed-spending');
var categoryRouter = require('./routes/category');

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
app.use('/api/v1/fixed-spending', fixedRouter);
app.use('/api/v1/category', categoryRouter);


module.exports = app;
module.exports.handler = serverless(app);