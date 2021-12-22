function* counter() {
  let counter = 0;
  while (true) {
    counter++;
    yield counter;
  }
}
const generator = counter();

// log all the numbers from 0 to 50
for (let i = 0; i < 50; i++) {
  let result = generator.next();
  console.log(result.value);
}

// log all the numbers from ***50 to 150***
for (let i = 0; i < 100; i++) {
  let result = generator.next();
  console.log(result.value);
}
