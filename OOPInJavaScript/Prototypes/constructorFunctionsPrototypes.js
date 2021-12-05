function Movie(title, year) {
    this.title = title;
    this.year = year;
}

const spiderman = new Movie("Spiderman", 2002);
const starWars = new Movie("Star Wars", 1977);

console.log(spiderman.__proto__);
console.log(starWars.__proto__);
console.log(Object.getPrototypeOf(spiderman));
console.log(Object.getPrototypeOf(starWars));
console.log(spiderman.constructor);
console.log(starWars.constructor);