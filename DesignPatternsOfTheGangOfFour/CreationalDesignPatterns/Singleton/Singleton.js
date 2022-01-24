const Singleton = ( function() {
    let instance;

    function init() {
        const randomNumber = Math.random();
        return {
            getRandomNumber() {
                return randomNumber;
            }
        }
    }

    return {
        getInstance() {
            if(!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1.getRandomNumber() === s2.getRandomNumber()); // this shows that the 'instances' are in fact only one instance || Singleton