exports.formatUserResponseObject = (user) => {
  return {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
  };
};
