function asyncFunction(callback){
    setTimeout(
        function(){
            const result = 4711;
            if(result < 0){
                callback(new Error("Result smaller than 0"), result);
            }else{
                callback(null, result);
            }
        },
        2000
    );
}

asyncFunction(
    (error, result) => {
        if(error){
            console.error(error);
        }else{
            console.log(result);
        }
    }
)