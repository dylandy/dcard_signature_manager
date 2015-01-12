var check_if_url_change = function(){
  var url_path = window.location.pathname;
  localStorage.setItem("");
}


jQuery(function($){
  $.address.change(function(e){
    chrome.storage.sync.get( "signature" , function(result){
      $('textarea').val(result.signature);
      }
    );
  });
});

