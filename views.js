module.exports=function(app){
  var bodyParser=require('body-parser');
  var urlencodedParser=bodyParser.urlencoded({extended: false});
  var compiler = require('./controllers/compiler')
  var crawler=require('./controllers/crawler');


  app.get('/',function(req,res){
    var link='https://a2oj.com/ps';
    crawler(link,res);
  });

  app.get('/p',function(req,res){
    var ID=req.query.ID;
    var link='https://a2oj.com/p?ID='+ID;
    crawler(link,res);
    console.log(ID);
  });
  app.post('/compile',urlencodedParser,function(req,res){
    var fs=require('fs');
    fs.writeFile('program.cpp',req.body.code,function(){compiler(res);});
  });
 app.get('/submit',function(req,res){
   res.render('homepage',{user:'sikander',problem_id:req.query.ID});
   res.end("lo;");
 });
};
