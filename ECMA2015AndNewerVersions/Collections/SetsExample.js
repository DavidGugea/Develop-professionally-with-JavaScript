const testSet = new Set();
testSet.add(1);
testSet.add(2);
testSet.add(3);
testSet.add("1");
testSet.add("2");
testSet.add("3");

console.dir(testSet);

for(let value of testSet){
    console.log(value);
}