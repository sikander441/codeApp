module.exports=function(app){
  var bodyParser=require('body-parser');
  var urlencodedParser=bodyParser.urlencoded({extended: false});
  var compiler = require('./controllers/compiler')



  app.get('/',function(req,res){
    res.render('homepage',{user:'sikander'});
  });


  app.post('/compile',urlencodedParser,function(req,res){
    var fs=require('fs');
    fs.writeFile('program.cpp',req.body.code,function(){compiler(res);});
  });


};
