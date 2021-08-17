import { shape } from "./shapeModule.js";

export class circle extends shape {
    constructor(r, x, y) {
        super("yellow")
        this.raduis = r
        this._x = x
        this._y = y
    }
    getArea() {
        console.log(Math.PI * Math.pow(this.r, 2))
    }
}