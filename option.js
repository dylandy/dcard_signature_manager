var save_local = function(key , val){
  chrome.storage.local.set({
    key : val
  },
    function(){
      console.log("saved"+key+"as"+val);
    }
  );
}

var get_local = function(target){
  var output;
  chrome.storage.local.get( target , function(result){
    output = result.target;
  });
  return output;
}

var set_signature = function(){

}

jQuery(function($){
  set_signature();

});
