function* yieldInRange(rangeStart, rangeEnd, rangeStep, skipFirst=false){
  for(let i = rangeStart ; i < rangeEnd ; i += rangeStep){
    if(skipFirst && i === rangeStart){
      continue;
    }
    
    yield i;
  }
}

const generator = yieldOneThenTwo(0, 100, 10, true);

let result = generator.next();
while(!result.done){
  console.log(`-- > ${result.value}`);
  result = generator.next();
}

/*
let result = generator.next();
console.log(result);
result = generator.next();
console.log(result);
result = generator.next();
console.log(result);
*/

/*
for(let value of generator){
  console.log(value);
}
*/
