const userRepo = require('./repo');
const { generateToken } = require('../../utils/jwt');
const { formatUserResponseObject } = require('../../utils/helper');
const { hashPassword, comparePassword } = require('../../utils/passwordUtils');

const registerUser = async (userData) => {
  const user = await userRepo.findUserByEmail(userData.email);
  if (user) {
    throw new Error('User Already Exists!');
  }
  userData.password = await hashPassword(userData.password);
  const savedUser = await userRepo.createUser(userData);
  if (!savedUser) {
    throw new Error('User Not Created!');
  }
  const formattedUser = formatUserResponseObject(savedUser);
  const token = generateToken(formattedUser);
  return { ...formattedUser, token };
};

const loginUser = async (email, password) => {
  const user = await userRepo.findUserByEmail(email);
  if (!user) {
    throw new Error('User Not Found!');
  }
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid Credentials!');
  }
  const formattedUser = formatUserResponseObject(user);
  const token = generateToken(formattedUser);
  return { ...formattedUser, token };
};

module.exports = {
  registerUser,
  loginUser,
};
