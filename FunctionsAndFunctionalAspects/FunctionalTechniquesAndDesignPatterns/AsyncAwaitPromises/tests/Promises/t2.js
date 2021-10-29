setTimeout(
    function(){
        getPerson(function(){
            getLog(function(id){
                // Code
            })
        })
    },
    1000
);