const assert = require("assert");
const Rectangle = require("../src/Rectangle.js");
const Square = require("../src/Square.js");

describe("Rectangle", () => {
    describe("#area()" , () => {
        it("should return the area based on height and width", () => {
            // Test the rectangle
            const rectangle = new Rectangle();
            rectangle.height = 7;
            rectangle.width = 8;
            assert.equal(rectangle.area, 56);
        });
        it("should return the area based on height and width", () => {
            // Test the square
            const rectangle = new Square();
            rectangle.height = 7;
            rectangle.width = 8;
            assert.equal(rectangle.area, 56);
        })
    })
})