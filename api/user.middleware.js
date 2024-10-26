const { body, validationResult } = require('express-validator');

exports.validateUser = [
    body('name')
      .isString()
      .notEmpty()
      .withMessage('Name must be a non-empty string.'),
    body('email')
      .isEmail()
      .withMessage('Email must be a valid email address.'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];