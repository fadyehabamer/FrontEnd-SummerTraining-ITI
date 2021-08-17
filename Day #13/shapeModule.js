export class shape {

    constructor() {
        this.color;
    }
    set setcolor(color_value) {
        this.color = color_value;
    }
    get colorDis() {
        return this.color;
    }

    DrawShape() {
        console.log(this.color)
    }
}


let shape1 = new shape();
shape1.color = "blue"
console.log(shape1.colorDis)