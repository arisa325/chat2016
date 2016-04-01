var express = require('express');
var router = express.Router();

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    response.render('room', {userName : request.body.userName});
});

module.exports = router;
