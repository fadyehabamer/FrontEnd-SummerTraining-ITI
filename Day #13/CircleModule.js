import { shape } from "./shapeModule.js";

export class circle extends shape {
    constructor(r, x, y) {
        super("yellow")
        this.radius = r
        this._x = x
        this._y = y
    }
    getArea() {
        console.log(Math.PI * Math.pow(this.radius, 2)) // was this.r (undefined) -> NaN
    }
}