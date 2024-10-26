
const { userChat } = require("./user.controller");

module.exports = function (socketio) {
  socketio.on('chat_message', (msg) => {
    userChat(msg)
  });
}