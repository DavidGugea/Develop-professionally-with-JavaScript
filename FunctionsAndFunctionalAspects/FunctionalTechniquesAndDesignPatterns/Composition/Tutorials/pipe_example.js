getName = (person) => person.name;
uppercase = (string) => string.ToUpperCase();
get6Characters = (string) => string.substring(0, 6);
reverse = (string) => string
    .split('')
    .reverse()
    .join();

pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
)(
    {
        name : "Buckethead"
    }
);