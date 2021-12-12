// Loose augmentation
const ValidatorModule = (
    (module) => {
        let format = "HTML5";

        module.results = [];
        module.validate = function(){
            console.log(`Validation started : ${format}`);
            module.results.push("Test compelted.");
        }

        module.getResults = function(){
            return results;
        }

        return module;
    }
)(ValidatorModule || {});

/*
This approach allows us to extend our modules without the need to change the
original implementation. There are different techniques which can be used to
implement module augmentation, and we will cover a couple of them in this chapter.

Module augmentation can be very useful when working on projects that have many
contributors to the code base. This type of projects usually require us to extend our
modules by adding new code and functionality to what has been already developed
by other developers.
*/