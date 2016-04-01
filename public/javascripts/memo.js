'use strict';

$(function () {
    // メモ
    $('#memo').on('click', function(){
      $('#thread').prepend($('#userName').val() + 'さんのメモ：' + $('#msg').val() + '<br />');
      $('#msg').val('');
    });
});
