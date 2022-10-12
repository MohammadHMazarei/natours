const express = require('express');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoute');
const globalErrorhandler = require('./controllers/errorController');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorhandler);

module.exports = app;
