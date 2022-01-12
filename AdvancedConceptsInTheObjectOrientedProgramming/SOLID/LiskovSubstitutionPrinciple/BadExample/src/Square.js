const Rectangle = require("./Rectangle.js");

module.exports = class Square extends Rectangle {
    get width() {
        return this._width;
    }

    set width(width) {
        this._height = width;
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
        this._width = height;
    }
}