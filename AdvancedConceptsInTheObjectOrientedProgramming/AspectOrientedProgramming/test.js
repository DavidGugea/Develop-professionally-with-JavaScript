const test = x => y => {
    console.log(x, y);
}

const x = test(5);
x(6);