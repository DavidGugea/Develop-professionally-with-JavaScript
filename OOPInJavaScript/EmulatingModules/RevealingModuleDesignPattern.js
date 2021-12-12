/*
// Example using the module design pattern ( combination between closures and IIFEs ), not the reavealing module design pattern 
const ValidatorModule = (
    () => {
        let format = "HTML5";

        return {
            validate : function(){
                console.log(`Starting validation : ${format}`);
                ValidatorModule.validationFinished();
            },
            validationFinished : function(){
                console.log(`Validation finished : ${format}`);
            }
        }
    }
)();

ValidatorModule.validate();
*/

// Using the reavealing module design pattern:

const ValidatorModule = (
    () => {
        // private properties
        let format = "HTML5";

        // private methods
        function validate(){
            console.log(`Validation started : ${format}`);
            validationFinished();
        }

        function validationFinished(){
            console.log(`Validation finished : ${format}`);
        }

        // public API
        return {
            // public reference on the private method
            validate : validate
        }
    }
)();

ValidatorModule.validate();