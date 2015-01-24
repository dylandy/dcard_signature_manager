var sleep = function(n){
  var   start = new Date().getTime();
  while(true) if(new Date().getTime()-start> n)   break;
}

var get_signature = function(){
  chrome.storage.sync.get( "signature" , function(result){
    $('textarea').val(result.signature);
  });
}

jQuery(function($){
  get_signature();
  $("body").on("click" , "#side item" , get_signature);
  $("body").on("click" , ".list > div > a" , function(){
    setTimeout(function() {
      get_signature();
    }, 2000);
  });
  $("body").on("click" , ".list > div:eq(2) > button" , get_signature);
});

