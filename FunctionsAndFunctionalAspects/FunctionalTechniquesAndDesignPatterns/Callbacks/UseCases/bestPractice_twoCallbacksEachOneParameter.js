function asyncFunction(success, error){
    setTimeout(
        function(){
            const result = 4711;
            if(result < 0){
                error(new Error("Result smaller than 0."));
            }else{
                success(result);
            }
        },
        2000
    );
}

asyncFunction(
    (result) => console.log(result),
    (error) => console.error(error)
);