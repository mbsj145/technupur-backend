'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user = new Schema({
  name: { type: String, require:true},
  email: { type: String, lowercase:true, require:true},
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', user);