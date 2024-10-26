'use strict';

const express = require('express');
const controller = require('./user.controller');
// validate user parameters
const {validateUser} = require('./user.middleware');

const router = express.Router();

/*********** Users Apis ************/
router.get('/users', controller.users);
router.post('/users', validateUser, controller.addUser);

module.exports = router;