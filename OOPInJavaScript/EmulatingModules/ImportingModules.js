const PersistenceModule = (
    () => {
        function saveResults(results){
            console.log(`Saving results : ${results}`);
        }

        return {
            saveResults : saveResults
        }
    }
)();

const ValidatorModule = (
    (persistenceModule) => {
        let format = "HTML5";
        let results = [];

        function validate(){
            console.log(`Validation started : ${format}`);
            results.push("Test completed.");
            persistenceModule.saveResults(results);
        }
        function getResults(){
            return results;
        }

        return {
            validate : validate,
            getResults : getResults
        }
    }
)(PersistenceModule);

ValidatorModule.validate();