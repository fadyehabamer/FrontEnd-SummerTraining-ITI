import { rectangle, square } from "./SquaresModule.js";
import { circle } from "./CircleModule.js"


let rec = new rectangle(20, 45);
let squ = new square(20, 20);
let cir = new circle(10, 20, 40);

// print each shape's colour and area
for (let s of [rec, squ, cir]) {
    s.DrawShape()
    s.getArea()
}