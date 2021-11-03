const test = () => {
    let i = 5;

    return test_2 = () => {
        let j = 10;

        return test_3 = () => {
            let x = 15;

            return test_4 = () => {
                console.log(i);
                console.log(j);
                console.log(x);
            }
        }
    }
}

const x = test();
x()()();