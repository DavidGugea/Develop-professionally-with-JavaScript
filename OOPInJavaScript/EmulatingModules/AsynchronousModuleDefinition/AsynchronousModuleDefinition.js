define(
    "validator", // require
    ["persistence"], // dependency
    function(persistence){ // function (require, factory)
        const module = {
            format : "HTML5",
            results : [],
            validate : function(){
                console.log(`Validation started : ${format}`);
                persistence.saveResults(results);
            }
        }

        return module;
    }
);

console.dir(define);