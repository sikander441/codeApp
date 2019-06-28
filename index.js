var express= require('express');
var app=express();

var compiler = require('./controllers/compiler')

compiler(app);
app.listen(3000);
