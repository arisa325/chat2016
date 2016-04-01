'use strict';

$(function () {
    // socket.ioの処理開始
    var socket = io.connect();

    // 退室
    $('#exit').on('click', function(){
      socket.emit('exit', $('#userName').val() + 'さんが退出しました。');
      location.href='/';
    });

    // メッセージを画面上に表示する
    socket.on('exit', function (data) {
      $('#thread').prepend(data + '<br />');
    });

});
