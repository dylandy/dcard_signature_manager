var get_signature = function(){
  chrome.storage.sync.get( "signature" , function(result){
    $('textarea').val(result.signature);
  });
}

jQuery(function($){
  $("body").on("click" , "#side item" , get_signature);
  $("body").on("click" , ".list > div > a" , function(){
    setTimeout(function() {
      chrome.storage.sync.get( "signature" , function(result){
        $('.float-comment textarea').val(result.signature);
      });
    }, 2000);
  });
  $("body").on("click" , ".list > div:eq(2) > button" , function(){
    chrome.storage.sync.get( "signature" , function(result){
      $('.float-comment textarea').val(result.signature);
    });
  });
  $("body").on("click" , ".float-ops button" , function(){
    chrome.storage.sync.get( "signature" , function(result){
      $('.float-comment textarea').val(result.signature);
    });
  });
  $("body").on("click" , ".navbar-right:eq(2)" , function(){
    setTimeout(function(){
      chrome.storage.sync.get( "signature" , function(result){
        $('.float-comment textarea').val(result.signature);
      });
    } , 2000);
  });
});

