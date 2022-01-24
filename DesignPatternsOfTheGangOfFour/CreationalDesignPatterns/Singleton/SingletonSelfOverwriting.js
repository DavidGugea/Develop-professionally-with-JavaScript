const Singleton = (
    function() { 
        return {
            getInstance() {
                // The instance is only instantiated once
                const instance = function() {
                    const randomNumber = Math.random();

                    return {
                        getRandomNumber() {
                            return randomNumber;
                        }
                    }
                }();

                this.getInstance = function() {
                    return instance;
                }
            }
        }
    }
)();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1.getRandomNumber() === s2.getRandomNumber()); // this shows that the 'instances' are in fact only one instance || Singleton