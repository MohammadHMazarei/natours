const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getMe = (req, res, next) => {
  req.params.id = req.user;

  next();
};

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne(req.params.id);

  if (!user) {
    return next('No user found with that ID', 404);
  }

  res.status(200).json({
    status: 'success',
    detail: {
      user,
    },
  });
});
