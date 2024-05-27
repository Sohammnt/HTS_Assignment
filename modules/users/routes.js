const express = require('express');
const userController = require('./controller');
const validate = require('../../middleware/validate.js');
const { userRegistrationSchema, userLoginSchema } = require('./schema');

const router = express.Router();

router.post(
  '/register',
  validate(userRegistrationSchema),
  userController.register
);
router.post('/login', validate(userLoginSchema), userController.login);
router.get('/health', userController.healthCheck);

module.exports = router;
