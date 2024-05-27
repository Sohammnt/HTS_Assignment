const responseHandler = (req, res, next) => {
  res.success = (data) => {
    res.status(200).json({
      success: true,
      data,
    });
  };

  res.error = (status, message, errors = []) => {
    res.status(status).json({
      success: false,
      error: {
        message,
        errors,
      },
    });
  };

  next();
};

module.exports = responseHandler;
