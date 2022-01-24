const cube = {
    width: 20,
    depth: 20,
    height: 20,
    color: "white",
    setWidth(width) {
        this.width = width;
    },
    setDepth(depth) {
        this.depth = depth;
    },
    setHeight(height) {
        this.height = height;
    },
    setColor(color) {
        this.color = color;
    },
    getWidth() {
        return this.width;
    },
    getDepth() {
        return this.depth;
    },
    getHeight() {
        return this.height;
    },
    getColor() {
        return this.color;
    }
}

const yellowCube = Object.create(cube);
yellowCube.setColor = "yellow";
const blueCube = Object.create(cube);
blueCube.setColor = "blue";

console.dir(yellowCube);
console.dir(blueCube);