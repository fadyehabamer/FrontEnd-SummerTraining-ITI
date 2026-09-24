import { shape } from './shapeModule.js'

export class rectangle extends shape {
    constructor(width, height, color = "red") {
        super(color)
        this._width = width;
        this._height = height;
    }
    getArea() {
        console.log(this._width * this._height)
    }
}

export class square extends rectangle {
    // was super("green"), which passed "green" as the width and left the colour red
    constructor(side) {
        super(side, side, "green");
    }
}