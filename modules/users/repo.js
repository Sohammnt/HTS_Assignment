const User = require('./model');
const { userExclusion } = require('../../utils/constants');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email }).select(userExclusion);
};

module.exports = {
  createUser,
  findUserByEmail,
};
