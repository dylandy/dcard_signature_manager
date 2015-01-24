var get_signature = function(){
  chrome.storage.sync.get( "signature" , function(result){
    $('textarea').val(result.signature);
  });
}

var get_signature_to_comment = function(){
  chrome.storage.sync.get( "signature" , function(result){
    $('.float-comment textarea').val(result.signature);
  });
}

jQuery(function($){
  $("body").on("click" , "#side item" , get_signature);
  $("body").on("click" , ".list > div > a" , function(){
    setTimeout(function() {get_signature_to_comment()}, 2000);
  });
  $("body").on("click" , ".list > div:eq(2) > button" , get_signature_to_comment);
  $("body").on("click" , ".float-ops button" , get_signature_to_comment);
  $("body").on("click" , ".navbar-right:eq(2)" , function(){
    setTimeout(function(){get_signature_to_comment()} , 2000);
  });
});

