module.exports=function(res){
  var spawn=require('child_process');
  spawn.exec("g++ program.cpp",function(error,stdout,stderr){
    if(stderr)res.send("compiled with following errors:<br><br>" + stderr.replace('\n','<br><br>'));
    else res.send("compiled Succesfully");

  })
};
