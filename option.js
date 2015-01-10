var set_signature = function(){
  $('button').click(function(){
    localStorage.setItem("signature" , $('textarea').val());
  });
}


jQuery(function($){
  $('textarea').val( localStorage.signature );
  set_signature();
});
