'use strict';

module.exports = function (socket, io) {
    // メッセージ送信
    socket.on('write', function (data) {
      io.sockets.emit('write', data);
    });
};
