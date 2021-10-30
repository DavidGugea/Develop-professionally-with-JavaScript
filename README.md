# Develop professionally with JavaScript

---

## Chapter 1 : Introduction

## Chapter 2 : Functions and functional aspects

## Chapter 3 : OOP in JavaScript

## Chapter 4 : ECMA 2015 and newer version

## Chapter 5 : The development process

## Chapter 6 : Testing JavaScript applications

## Chapter 7 : Advanced concepts in the object-oriented programming

## Chapter 8 : The design patterns of the Gang of Four

## Chapter 9 : Architectural patterns and concepts of modern JavaScript Web Frameworks

## Chapter 10 : Messaging

## Chapter 11 : Continuous Integration

---

## Chapter 1 : Introduction

Basic JavaScript syntax

---

## Chapter 2 : Functions and functional aspects

### Features of JavaScript functions

Functions are first-class objects in JavaScript. That means that they can be passed as arguments inside other arguments, they can be assigned to variables, returned from other functions etc. All functions have a name property that represents the name of the function, a length property that represents the number of defined arguments that it has and a prototype property that we'll talk about in chapter 3 when in comes to OOP in JavaScript.

In functions we can use, as well as we can in objects, the keyword ```this```. The keyword ```this``` is based on the context of the function. Example:

```JavaScript
const person = {
    firstName : "Max",
    getFirstName : function(){
        return this.firstName();
    }
}

console.log(person.getFirstName()); // Output : Max
```

In this case ```this``` is the object ```person```. ```this``` is always about the context. If we are not inside any object and use ```this``` on a function, ```this``` points out to the window object:

```JavaScript
getFirstName : function(){
    return this.firstName();
}

console.log(getFirstName()); // undefined
```

Here, we get 'undefined' since we don't have any property named firstName inside the object ```this``` where ```this``` is pointing to.

Functions also build a 'Function-Level-Scope' meaning that we have a defined visibility scope inside functions. Example:

```JavaScript
function example(x){
    if(x){
        var y = 4711;
    }
    for(var i = 0 ; i < 4711; i++){
        // Code
    }

    console.log(y); // 4711
    console.log(i); // 4711
}

example(true);
```

In our case we still get the values because they were defined inside the function level scope. This only works with ```var```, not with ```let```.

In many cases it's better to define all the variables at the beginning of the function. It's a good thing to define all of your variables at the start of the function since you can be sure that you don't repeat yourself. **Declaring all the variables at the start of a function, before using them, is called Variable Hoisting.**

```JavaScript
function example(x){
    var y, i;

    console.log(y);
    console.log(i);

    if(x){
        var y = 4711;
    }
    for(var i = 0 ; i < 4711; i++){
        // Code
    }
}
```

If you choose not to declare the visibility/behavior of your variable by not writing ```let```, ```var``` nor ```const``` before it, it will be seen as a global variable. This is a very bad practice because it can cause name conflicts and other bugs that are very hard to fix.

In JavaScript there is no such thing as proper function overloading. A 'best practice' when it comes to function overloading is setting up a 'config' variable that changes the output of the function. Example:

```JavaScript
function add(x, y, config){
    const result = x + y;
    if(config && config.log){
        console.log(result);
    }

    return result;
}

add(2, 2);
add(2, 2, {log : true});
```

### Standard Methods for JavaScript Functions

In JavaScript, as we said before the keyword ```this``` represents the context that a function is bound to.
All JavaScript functions have some standard functions. This functions are:

- bind
- call
- apply

#### bind

With bind, as well as with the other standard methods, we can change the context of the keyword ```this``` and get that function in return. Example:

```JavaScript
const button = {
    handler : null,
    onClick : function(handler){
        // handler is a callback-handler
        this.handler = handler;
    },
    click : function(){
        this.handler();
    }
}

const handler = {
    log : function(){
        console.log("Clicked on the button.");
    },
    handle : function(){
        this.log();
    }
}

// button.onClick(handler.handle); Wrong, since this points to button, not to handler
button.onClick(handler.handle.bind(handler));
button.click();
```

In this example you can see that if we choose to use ```button.onClick(handler.handle)``` we will get an error because we use ```this.log()``` inside the ```handler.handle``` function, but we use the ```handler.handle``` function inside another context. The context is not ```handler```, the context is ```button``` and since ```button``` doesn't have a function called ```log``` we will get an error. However, if we use the ```bind``` keyword, we can change the reference of ```this``` inside the when we pass ```handler.handle``` function inside the ```button.onClick``` function and we can change it to be ```handler``` since we have the function ```handler.log``` there, so we won't get an error and everything will work the way we want it to.

If we want to pass arguments with ```bind``` we can do it by inserting them as rest arguments:

```JavaScript
function.bind(thisArg)
function.bind(thisArg, arg1)
function.bind(thisArg, arg1, arg2)
function.bind(thisArg, arg1, ... , argN)
```

Bind doens't execute the function, it just returns a new function back with the given context. 

When creating a bound function, The bound function will get some extra arguments:

- ```[[TargetFunction]]```, which represents the function that you used the ```bind()``` keyword on.
- ```[[BoundThis]]``` which represents the ```this``` keyword.
- ```[[BoundArgs]]``` which represents the given arguments ( apart from the ```this``` keyword ) inside the ```.bind()``` method.

As previously mentioned, bind changed the ```this``` keyword of a function. **Even if it is applied multiple times, on multiple bound functions, it can only change the ```this``` keyword once:

```JavaScript
const f = function(){
    // code
    console.log(this);
}

const test_object_1 = { number : 1 };
const test_object_2 = { number : 2 };
const test_object_3 = { number : 3 };

const f_bind_1 = f.bind(this, 1, 2, 3);
const f_bind_2 = f_bind_1.bind(this, 4, 5, 6);
const f_bind_3 = f_bind_2.bind(this, 7, 8, 9);

f_bind_1();
f_bind_2();
f_bind_3();
```

In this example, even if the ```[[BoundThis]]``` property of each bound function will be updated to become the given ```this``` argument inside each ```.bind(this, ...args)``` function, when logging out ```this``` to the console, ```this``` won't be overriden by the other ```.bind()``` functions, and regardless of how many times we bind the bounded functions, it will always be the first given ```this``` argument, from the first ```bind()``` function ( in our case that would be ```test_object_1```. ).

#### call

Call, just like bind, changes the context, the function is bound to. That means that, as well as bind, it changes the meaning of the ```this``` keyword. Unlike ```bind```, call executes the function directly without giving you back a new function with a changed context. Example:

Let's say that you want to have a function that prints all the names it is given ( using the ```arguments``` property that every function has ).

```JavaScript
function printNames(){
    console.log(arguments);

    arguments.forEach((argument) => {
        console.log(argument);
    });
}
```

This will result into an error since the keyword ```arguments``` doesn't fully inherit all the methods of a list.
We can, however, take the ```forEach``` method from the ```Array.prototype``` and apply it to our list of arguments. **This is also known as Method Borrowing**.

```JavaScript
function printNames(){
    console.log(arguments);

    Array.prototype.forEach.call(arguments, function(argument){
        console.log(argument);
    });
}

printNames("a", "b");
```

#### apply

Apply is almost the same as call. The only difference between apply and call is that we have to give the list of arguments inside an array, not as rest parameters.

Example:

```JavaScript
function printNames(){
    Array.prototype.forEach.apply(arguments, [(argument) => {
        console.log(argument);
    }]);
}

printNames("a", "b");
```

#### using standard methods in variadic functions

Variadic functions are functions where the total numbers of parameters is unknown ( where we work with rest parameters ).

An example for a variadic function is ```Math.max()```:

```JavaScript
console.log(Math.max(1, 2)); // 2
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(1, 2, 3, 4)); // 4
console.log(Math.max(1, 2, 3, 4, 5)); // 5
```

If we would have a list of numbers that we want to apply this function to, we can't just give the list as an argument. We can however, use apply, for example ( or add numbers as rest argument ):

```JavaScript
const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(numbers)); // WRONG
console.log(Math.max(...numbers)); // 5
console.log(Math.max.apply(null, numbers)); // 5
```

**It is considered a *best practice* to set the ```this``` argument to be ```null``` if it's not needed.**

### Characteristics of functional programming

In functional programming the focus is on functions, not on objects
Here are some principles & traits of functional programming:

- Functions are first-class objects meaning that they can be assigned to other variables, passed down as parameters inside other functions or be returned from other functions
- Data-Structures don't change in functional programming. Functions that are used on data structures create new data-structures but never change the original ones. In pure functional programming languages you can't change data-structures. You can't add or delete elements from a list for example. JavaScript is not a pure functional programming language.
- Functions in functional programming languages don't have any side-effects meaning that for the same input you will **always** get the same output.
- Functional programming is declarative. We focus on **what** the program does, we don't focus on the **how** the program does what it does.
- Functional programming languages usually take less space than imperative or object oriented programming languages.

### Differences between object oriented programming and functional programming

In object oriented programming, data and behavior are assembled into a structure called a 'class'. The behavior, so the methods of the class, work together with the data. In functional programming, the data is just bound to the function that you are using. That means that you can use functions with different types of data sturctures or you can use the same data structure with different functions.

In functional programming composition means that you compose easier functions to more complex ones.

### Differences between imperative programming and functional programming

In imperative programming you describe **how** you do what you do. In functional programming you describe **what** the result must be, you describe how to get to the result. Shortly said:

**Imperative programming is about how to get to the result while functional programming is about what the result is.**

In imperative programming you use for- and while- loops combined with if/else conditions and more while in functional programming you just describe what the result is.

### Differences between pure functional programming and functional programming in JavaScript

As we've discussed before, JavaScript is an impure programming language. We don't have homoiconicity, lazy evaluation ( lazy evaluation optimization ) or pattern matching, the way we have them in pure programming languages. Here is a short description of these terms:

- Homoiconicity means that the language itself is written as a data-structure that you can represent in that language. You can program the language itself.
- Lazy evaluation, delayed evalutaion or non-struct evaluation means that you don't evaluate what you never need to ( if the value isn't needed, don't run the expression ) and if the evaluation is done and we need the value twice, don't evaluate it the second time, just save the answer and use it again. Only call it if you need it. The opposite of lazy evaluation is strict / eager evaluation. Lazy evaluation reduces the amount of code that is executed and it also reduces the amount of memory that is used. You're separating **how** to generate the value ( the code that you write, that generates the value ) from **when or wether** you run it.
- Pattern matching allows you to mtach a value against some pattern to select a branch of code.

### From Imperative programming to functional programming

As we've already said, imperative programming has the focus on **how** we get to a result while functional programming has the focus on **what** the result is and should look like.

In this sub chapter I will describe a couple methods in the functional programming.

##### forEach

Instead of iterating with a for loop over an array, you can use a ```forEach``` loop:

```JavaScript
array.forEach((value, index, array) => {
    console.log(value);
});
```

##### map

If you want to get a new array from another array that has something changed to every element of it, you can use ```map```:

```JavaScript
const numbers = [1, 2, 3, 4, 5];
function power_of_2(number){
    return number**2;
}

const numbers_at_the_power_of_2 = numbers.map(
    (value, index, array) => {
        return power_of_2(value);
    }
);
```

##### filter

If you want to filter out values based on a function that returns ```true``` or ```false``` you can use the ```filter``` method:

```JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function number_under_5(number){
    return number < 5;
}

const number_under_5 = numbers.filter(
    (value, index, array) => {
        return number_under_5(value);
    }
);
```

##### reduce

You can also reduce a data structure to one single element by using the ```reduce``` method. Example:

```JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum_of_numbers = numbers.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue;
    },
    0 // default previousValue
);
```

### Functional Techniques and Design Patterns

Before getting into functional techniques we should understand some basic terms.

#### Homoiconicity

Homoiconicity means "code as data" which signifies that hte language itself is written as a data-structure that you can represent in that language. You can prgoram the langauge itself. Homoiconicity is a property in which the program tructure is very similar to its syntax.

#### Lazy evaluation / Delayed evaluation / Non-struct evaluation

A programm that uses lazy evaluation doesn't evaluate what it never needs to. If you never need a value, don't run the expression that generates the valu eif you're never going to use it. Once you do evaluate it and you need it multiple times, don't evaluate it a seocnd time, just save the answer and use it again. So if you have an expression that returns a result, you either never run it, or you only run it once. This is called Lazy Evaluation Optimization. Yo don't run expression you don't need and if you do run them, you only run them once. 
The opposite of lazy evaluation is strict/eager evaluation.
Lazy evaluation reduces the amount of code that is executed & also the amount of memory that is used.

#### Higher order and unary functions.

A higher order function is a function that either takes a function as a parameter, returns a function or both.
An unary function is a function that only takes in one parameter.

#### Function composition and function piping

Function composition is exactly like the mathematical function composition. You have for example 2 functions, and you want to combine them into one function that can work with the future inputs. It's the same thing in JS. 

Example of function composition:

```JavaScript
const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

console.log(multiplyBy5(subtract1(add2(4)))); // Output : 25
```

This is not a real example of composition in a real js project since we always have to manually give the functions that we want to compose. What you have to understand from this example is that functions in composition go from the inside to the outside. First we execute the ```add2```, then ```subtract1``` and then, in the end, the ```multiplyBy5```. So we have ```(4 + 2 - 1) * 5``` which equals ```25```.

Normally, we would have a function that receives the callback functions that we want to compose as an argument and then returns a function that takes in multiple arguments that will be passed in to the accumulated composed function. Example:

```JavaScript
const compose = (...callbackFunctions) => {
    return function(...compositionValues){
        return callbackFunctions.reduceRight(
            (accumulator, currentCallback, currentIndex, callbackFunctionsArray) => Array.isArray(accumulator) ? currentCallback(...accumulator) : currentCallback(accumulator),
            compositionValues
        )
    }
}
```