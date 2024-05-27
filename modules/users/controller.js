const userService = require('./service');

const register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.success(user);
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userService.loginUser(req.body.email, req.body.password);
    res.success(user);
  } catch (error) {
    return next(error);
  }
};

const healthCheck = async (res, next) => {
  try {
    res.status(200).json('Health OK');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  login,
  healthCheck,
};
