/*
The let statement declares a block-scoped local variable, optionally initializing it to a value.

A block statement (or compound statement in other languages) is used to group zero or more statements.

The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript. The opposite behavior is possible using an empty statement, where you provide no statement, although one is required.

The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.
*/

function setup()  {
  for (let i = 0; i < 100; i++) {
    // some stuff will happen
    if(window.mouseX > 20){
      let j = 20;
    }

    console.log(j);
  }

  console.log(i);
}

setup();
