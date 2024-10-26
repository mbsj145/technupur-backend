'use strict';

const socketFunctions = require("../sockets");

module.exports = function (socketio) {
  socketio.on('connection', (socket) => {
    onConnect(socket);
    socketFunctions(socket);

    socket.connectedAt = new Date();
    socket.address = `${socket.request.connection.remoteAddress} : ${socket.request.connection.remotePort}`;
    console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`);
  });

  socketio.on('disconnect', (socket) => {
    console.log('User disconnected');
    onDisconnect(socket)
  });

};

function onConnect(socket) {
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });
}

function onDisconnect(socket) {
  console.info('[%s] DISCONNECTED', socket.address);
}