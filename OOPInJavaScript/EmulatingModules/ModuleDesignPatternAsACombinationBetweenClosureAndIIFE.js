const ValidatorModule = ( 
    () => {
        // Private variable
        let format = "HTML5";

        // public API
        return {
            // public method
            validate : function(){
                console.log(`Starting validation : ${format}`);
            }
        }
    }
)();

ValidatorModule.validate(); // HTML5
ValidatorModule.format = "SGML";
ValidatorModule.validate(); // HTML5