'use strict';
process.setMaxListeners(0);
process['env']['NODE_ENV'] = process['env']['NODE_ENV'] || 'development';
require('dotenv').config({ path: `./.env.${process['env']['NODE_ENV'] == 'production' ? 'production' : 'development'}` });
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const { Server } = require('socket.io');
const config = require('./config/environment');
const database = require('./config/connection');
const { processLargeFile } = require('./utils/fileHandler');

let app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(config['assets']);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.getConnection();
require('./routes')(app);

app.get('*', (req, res) => res.sendFile(config['view']));

// Efficient File Handling
processLargeFile('input.txt', 'output.txt');

let server = require('http').createServer(app);

const io = new Server(server);
global.io = io;

require('./utils/socket')(io);

server.listen(config['port'], () => console.log(`listening to ${config['port']} envoirnment ${process['env']['NODE_ENV']}`));