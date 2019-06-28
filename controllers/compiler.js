module.exports=function(app){

  var bodyParser=require('body-parser');
  var urlencodedParser=bodyParser.urlencoded({extended: false});
  app.set('view engine','ejs');


  var compileCode=function(res){
    var spawn=require('child_process');
    spawn.exec("g++ program.cpp",function(error,stdout,stderr){
      if(stderr)res.send("compiled with following errors:<br><br>" + stderr.replace('\n','<br><br>'));
      else res.send("compiled Succesfully");
      
    })
  };


  app.get('/',function(req,res){
    res.render('homepage',{user: 'sikander'});
  });


  app.post('/profile',urlencodedParser,function(req,res){
    var fs=require('fs');
    fs.writeFile('program.cpp',req.body.code,function(){compileCode(res);});

  });




};
