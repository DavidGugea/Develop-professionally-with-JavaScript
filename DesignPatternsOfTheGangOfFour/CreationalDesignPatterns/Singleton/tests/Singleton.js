const Singleton = ( function() { 
    let instance;

    function createInstance() {
        const randomNumber = Math.random();

        return {
            getRandomNumber() {
                return randomNumber;
            }
        }
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1.getRandomNumber() === s2.getRandomNumber());