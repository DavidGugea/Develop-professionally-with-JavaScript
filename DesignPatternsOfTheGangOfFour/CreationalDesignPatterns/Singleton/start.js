const s1 = require("./SingletonClassSyntax.js");
const s2 = require("./SingletonClassSyntax.js");

console.log(s1.getRandomNumber() === s2.getRandomNumber()); // this shows that the 'instances' are in fact only one instance || Singleton