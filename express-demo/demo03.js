var express = require('express');
var app = express();

/**
 * 模版引擎修改为ejs
 */
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('hello-word', {
        'news': ['Angular', 'React', 'Vue']
    });
});

app.listen(3000);