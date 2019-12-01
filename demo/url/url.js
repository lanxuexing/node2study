var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var queryParams = url.parse(req.url, true).query;
    res.setHeader('Content-type', 'text/html;charset=utf8');
    res.end('服务器收到请求参数: ' + queryParams.userName + queryParams.password);
});

server.listen(3000, '127.0.0.1');