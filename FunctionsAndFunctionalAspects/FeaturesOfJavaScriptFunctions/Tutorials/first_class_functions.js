// https://www.youtube.com/watch?v=kr0mpwqttM0&ab_channel=CoreySchafer

/*
function square(x){
    return x * x;
}

let f = square

console.log(square);
console.log(f(5));
*/

/*
function my_map(func, arg_list){
    result = [];
    for(let i = 0 ; i < arg_list.length; i ++){
        result.push(func(i));
    }

    return result;
}

function square(x){
    return x * x;
}
function cube(x){
    return x * x * x;
}

let squares = my_map(cube, [1, 2, 3, 4, 5]);
console.log(squares);
*/

/*
function logger(msg){
    function log_message(){
        console.log(`log : ${msg}`)
    }

    return log_message;
}

log_hi = logger("Hi");
log_hi();
*/

function html_tag(tag){
    function wrap_text(msg){
        console.log(`<${tag}>${msg}</${tag}>`);
    }

    return wrap_text;
}

print_h1 = html_tag("h1");
print_h1("Test Headline!");
print_h1("Another Headline!");

print_p = html_tag("p");
print_p("Test Paragraph!");
print_p("Another Paragraph!");