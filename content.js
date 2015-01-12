jQuery(function($){
  chrome.storage.sync.get( "signature" , function(result){
    $('textarea').val(result.signature);
    }
  );
});

