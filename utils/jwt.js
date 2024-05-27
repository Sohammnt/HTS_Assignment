const jwt = require('jsonwebtoken');

const generateToken = (userObject) => {
  return jwt.sign(userObject, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
  generateToken,
};
