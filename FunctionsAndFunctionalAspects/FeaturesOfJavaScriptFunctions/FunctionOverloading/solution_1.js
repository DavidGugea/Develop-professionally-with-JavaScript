function add(x, y, log){
    const result = x + y;
    if(log){
        console.log(result);
    }

    return result;
}

add(2, 2);
add(2, 2, true);