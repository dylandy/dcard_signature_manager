var sleep = function(n){
  var   start = new Date().getTime();
  while(true) if(new Date().getTime()-start> n)   break;
}

jQuery(function($){
  $("#side .item").click(function(){
    console.log("in 1");
    chrome.storage.sync.get( "signature" , function(result){
      $('textarea').val(result.signature);
    });
  });
  $(".list > div > a").click(function(){
    sleep(2000);
    console.log("in 2");
    chrome.storage.sync.get( "signature" , function(result){
      $('.float-comment textarea').val(result.signature);
    });
  });
  $(".list > div:eq(2)").children('button').click(function(){
    console.log("in 3");
    chrome.storage.sync.get( "signature" , function(result){
      $('textarea').val(result.signature);
    });
  });
});

