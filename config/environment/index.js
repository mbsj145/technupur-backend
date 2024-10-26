'use strict';

const _ = require('lodash');
const path = require('path');
const express = require('express');
require('dotenv');

process['env']['NODE_ENV'] = process['env']['NODE_ENV'] || 'development';
const mongo = require(`./${process['env']['NODE_ENV']}`)
const all = {
  env: process['env']['NODE_ENV'],

  // Frontend path to server
  assets: express.static(__dirname + '/../../public'),
  view: path.normalize(__dirname + '/../../public/index.html'),

  // Server port
  port: process.env.PORT || 4000,
  mongo
};

/* Export the config object based on the NODE_ENV */
/*================================================*/

module.exports = _.merge(all, require(`./${process.env.NODE_ENV}.js`) || {});
