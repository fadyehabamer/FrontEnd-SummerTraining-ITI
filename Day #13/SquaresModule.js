import { shape } from './shapeModule.js'

export class rectangle extends shape {
    constructor(width, height) {
        super("red")
        this._width = width;
        this._height = height;
    }
    getArea() {
        this.DrawShape()
    }
}

export class square extends rectangle {
    constructor(width, height) {
        super("green");
    }
}