'use strict';

module.exports = function (socket) {
    // 入室
    socket.on('enter', function (data) {
      socket.broadcast.emit('enter', data);
    });
};
