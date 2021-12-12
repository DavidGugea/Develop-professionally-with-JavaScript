// Building the namespace container ( using a singleton )
const Validator = {}; 
Validator.format = "HTML5";
Validator.validate = function(){
    console.log(`Validation started : ${this.format}`);
}

Validator.validate();
Validator.validate = function(){};
Validator.format = "SGML";