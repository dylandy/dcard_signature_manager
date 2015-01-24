var set_signature = function(){
  $('button').click(function(){
    $(this).attr("disabled" , true);
    localStorage.setItem("signature" , $('textarea').val());
    chrome.storage.sync.set({ "signature" : $('textarea').val()} , function(){
      console.log("signature setted");
    });
  });
}


jQuery(function($){
  $('textarea').val( localStorage.signature );
  set_signature();
});
