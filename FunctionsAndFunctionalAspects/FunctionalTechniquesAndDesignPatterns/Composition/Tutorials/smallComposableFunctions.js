function lowercase(str){
    return str.toLowerCase();
}
function uppercase(str){
    return str.toUpperCase();
}
function replace(old, fresh){
    return function(str){
        const regex = new RegExp(old, 'g');
        return str.replace(regex, fresh);
    };
}
function countWords(str){
    return str.split(" ").length;
}

const compose = (...fns) => (x) => {
    return fns.reduce((acc, f) => {
        return f(acc);
    }, x);
};

let testString = "The quick brown FOX jumps over the lazy dog.";

const uppercaser = compose(uppercase);
const complimenter = compose(lowercase, replace("lazy", "beautiful"));
const counter = compose(lowercase, countWords);
const replaceCounter = compose(
    lowercase,
    replace("fox", "flamingo bird"),
    countWords
);

console.log(replaceCounter(testString));