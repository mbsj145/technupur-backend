const mongoose = require('mongoose');
const { mongo } = require('../config/environment');

function getConnection() {
  if(!mongo['db_url']) throw new Error("Please add mongodb cluster in env file");
  
  mongoose.connect(mongo['db_url'], mongo.options);

  mongoose.connection.on('connected', () => console.log('Mongoose default connected'));

  mongoose.connection.on('error', (err) => console.log('Mongoose default connection error: ' + err));

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => mongoose.connection.close(() => process.exit(0)));
}

module.exports = { getConnection }