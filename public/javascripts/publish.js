'use strict';

$(function () {
    // socket.ioの処理開始
    var socket = io.connect();

    // 投稿
    $('#write').on('click', function(){
      socket.emit('write', $('#userName').val() + 'さん：' + $('#msg').val());
      $('#msg').val('');
    });

    // メッセージを画面上に表示する
    socket.on('write', function (data) {
      $('#thread').prepend(data + '<br />');
    });
});
