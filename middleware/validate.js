const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajvErrors = require('ajv-errors');
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
ajvErrors(ajv);

const validate = (schema) => (req, res, next) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    const error = new Error(validate.errors[0].message);
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = validate;
