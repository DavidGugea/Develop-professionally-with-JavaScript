function aFunction(callback){
    if(typeof callback === 'function'){
        callback();
    }else{
        // Exception
    }
}