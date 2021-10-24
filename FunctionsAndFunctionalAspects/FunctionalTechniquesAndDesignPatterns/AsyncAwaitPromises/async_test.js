const doWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 1000);
}

const doOtherWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("How are you?")
    }, 1000);
}

async function doAllTheWork(){
     const someText = new Promise(doWork);
     const text1 = await someText; // we always >await< a Promise
     console.log(text1);

     const otherText = new Promise(doOtherWork);
     const text2 = await otherText;
     console.log(text2);
}

doAllTheWork();
console.log("Done !");
