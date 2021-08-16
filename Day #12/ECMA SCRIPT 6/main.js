// * define array using let
let arr = [1, 90, 24, 52, 2, 43, 5, 7, 9]

// * Arrow function Ascending order
let ascend_arr = arr.sort((a, b) => a - b)
console.log(ascend_arr)

// * Arrow function descinding order
let descend_arr = arr.sort((a, b) => b - a)
console.log(descend_arr)

// * x>50 using filter
let grater_fifty = arr.filter(number => number > 50);
console.log(grater_fifty);

// * min , max => math.min , math.max , spread operator
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(` Min value in array is : ${min} , Max value in array is ${max}`)

// * =======================================================================================

let calculate = (first, second, ...arr) => {
    // “result of sum operation for 3,1,6,3 is 13”
    console.log(`result of sum operation for ${arr} is ${eval(arr.join(first))}`)
}
calculate("+", 100, 3, 1, 6, 3)