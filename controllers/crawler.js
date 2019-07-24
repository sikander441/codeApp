module.exports=function(link,res1)
{

  request=require('request');;
  cheerio=require('cheerio');
  console.log('here');
  URL=link;
  request(URL,function(err,res,body){
    console.log('here');
    if(err){
      console.log(err,'Error occured');

    }
    else {
      $=cheerio.load(body);
      var data=$('#page').html();
      //  console.log(data);
      res1.send(data);
      }
  });
};
