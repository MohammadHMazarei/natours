const express = require('express');
const tourRouter = require('./routes/tourRoute');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;
