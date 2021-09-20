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