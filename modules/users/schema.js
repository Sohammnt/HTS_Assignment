const userRegistrationSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1, maxLength: 10 },
    lastName: { type: 'string', minLength: 1, maxLength: 10 },
    email: { type: 'string', format: 'email' },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 16,
      pattern:
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,16}$',
      errorMessage: {
        minLength: 'Password should be at least 8 characters long',
        maxLength: 'Password should be at most 16 characters long',
        pattern:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      },
    },
  },
  required: ['firstName', 'lastName', 'email', 'password'],
  additionalProperties: false,
};

const userLoginSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

module.exports = {
  userRegistrationSchema,
  userLoginSchema,
};
