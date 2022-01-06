const QUnit = require("qunit");

QUnit.module(
    "some name",
    {
        setup: function(){
            console.log("This method will run before every test");
        },
        some_variable: 0,
        teardown: function(){
            console.log("This method will run after every test");
        }
    }
)

const add = (a, b) => a + b;
QUnit.test(
    "Testing the add function",
    (assert) => {
        const a = 2;
        const b = 3;
        const actual = add(a, b);
        const expected = 5;
        assert.equal(actual, expected, "Test message");
    }
);