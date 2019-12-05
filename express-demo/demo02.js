var express = require('express');
var app = express();

/**
 * 使用静态资源服务
 */
app.use(express.static('./public/'));

app.listen(3000);