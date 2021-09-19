function add(x, y){
    const result = x + y;
    if(arguments[2]){
        console.log(result);
    }

    return result;
}

add(2, 2);
add(2, 2, true);