'use strict';

function checkUserName() {
　　var userName = $('input[name="userName"]').val();
　　if (userName == '') {
      alert('ユーザ名を入力してください');
      return false;
    } else {
      $('form').submit();
    }
}
