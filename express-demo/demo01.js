var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('你好呀，express～');
});

app.get('/apple/:id', function(req, res) {
    var id = req.params['id'];
    var regx = /[\d]{6}/;
    if (regx.test(id)) {
        res.send('服务器接受到参数: ' + id);
    } else {
        res.send('请求参数错误～');
    }
});

app.listen(3000);