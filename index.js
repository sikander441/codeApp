var express= require('express');
var app=express();

app.set('view engine','ejs');

var VIEWS=require('./views');


//crawler(app);
VIEWS(app);


app.listen(3000);
console.log('server running now on port 3000');
