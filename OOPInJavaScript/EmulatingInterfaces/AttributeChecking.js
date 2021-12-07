const ShoeBox = function(width, depth, height){
    this.width = width;
    this.depth = depth;
    this.height = height;
    this.implementsInterfaces = ["Box"];

    this.getWidth = function(){
        return width;
    }
    this.getDepth = function(){
        return depth;
    }
    this.getHeight = function(){
        return height;
    }

    return {
        implementsInterfaces : this.implementsInterfaces,
        getWidth : this.getWidth,
        getDepth : this.getDepth,
        getHeight : this.getHeight
    }
}

const implements = (object, interfaceToImplement) => object.implementsInterfaces.includes(interfaceToImplement) ? true : false;

function calculateVolume(box){
    let volume = 0;
    if(implements(box, "Box")){
        volume = box.getWidth() * box.getDepth() * box.getHeight();
        return volume;
    }else{
        throw new Error("The object doesn't implement the needed interface");
    }
}

console.log(calculateVolume(new ShoeBox(25, 4, 4)));