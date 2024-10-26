'use strict';
// Development specific configuration
// ==================================

module.exports = {
  mongo: {
    db_url: process['env']['database_url'],
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    debug: false,
  },
  seedDB: true
};
