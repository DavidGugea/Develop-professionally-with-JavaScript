function aFunction(callback){
    if(typeof callback === 'function'){
        callback();
    }else{
        // Exception
    }
}

aFunction(function(){
    console.log("anonymous callback");
});