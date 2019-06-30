module.exports=function(app)
{

  request=require('request');;
  cheerio=require('cheerio');
  console.log('here');
  URL='https://www.hackerrank.com/domains/algorithms';
  request(URL,function(err,res,body){
    console.log('here');
    if(err){
      console.log(err,'Error occured');

    }
    else {
      $=cheerio.load(body);
      var data=$('h4').html();
        console.log(data);
      
      }
  });
};
