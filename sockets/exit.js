'use strict';

module.exports = function (socket) {
    // 退室
    socket.on('exit', function (data) {
      socket.broadcast.emit('exit', data);
    });
};
