
// emit user messages
exports.userChat = async (msg) => {
    global.io.emit('chat_message', msg);
}