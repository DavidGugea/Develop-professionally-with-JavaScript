var addTo = function(passed){
    var add = function(inner){
        return passed + inner;
    }

    console.dir(add);

    return add;
}

{
    console.dir(addTo(3));
}