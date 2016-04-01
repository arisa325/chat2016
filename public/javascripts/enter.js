'use strict';

$(function () {
    // socket.ioの処理開始
    var socket = io.connect();

    // 入室
    socket.emit('enter', $('#userName').val() + 'さんが入室しました。');

    // メッセージを画面上に表示する
    socket.on('enter', function (data) {
      $('#thread').prepend(data + '<br />');
    });

});
