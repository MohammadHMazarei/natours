const catchAsync = require('./../utils/catchAsync');
const Tour = require('./../models/tourModel');

exports.getAllTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getTour = (req, res, next) => {};

exports.createTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

exports.updateTour = (req, res, next) => {};

exports.deleteTour = (req, res, next) => {};
