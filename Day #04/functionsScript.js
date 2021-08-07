//  * assignment functions

function summition(firstInput, secondInput) {
    console.log(firstInput + secondInput)
}
// -----------------------------------------------------------------
function displayFull(first, middle, last) {
    console.log("Hi, Iam " + first + " " + middle + " " + last)
    // * if any param missing it will give undefined
}

// --------------------------------------------------------------------------

// factorial functions
function getFactorialRecursion(number) {
    if (number === 0) {
        return 1;
    }
    return (number * getFactorialRecursion(number - 1));
}


function factorialTraditional(integer) {
    let factorial = 1;

    for (let i = 1; i <= integer; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

// --------------------------------------------------------------------------------
// * simple calculator
function simpleCalc(firstnum, operator, secnum) {
    var result;

    switch (operator) {
        case "+":
            result = firstnum + secnum;
            break;

        case "-":
            result = firstnum - secnum;
            break;

        case "*":
            result = firstnum * secnum;
            break;

        case "/":
            result = firstnum / secnum;
            break;
    }
    console.log(result)
}

// ---------------------------------------------------------------------
// * grade calculation
function gradeCalculation(grade) {
    if (grade > 85) {
        console.log('Excellent');
    }

    else if (grade < 85 && grade >= 75) {
        console.log('V. good');
    }
    else if (grade < 75 && grade >= 65) {
        console.log('Good');
    }
    else if (grade < 65 && grade >= 50) {
        console.log('pass');
    }
    else { console.log('fail'); }

}

// ------------------------------------------------------------------
function getcharcode(string) {

    for (var i = 0; i < string.length; i++) {
        console.log(string[i] + " " + string[i].charCodeAt(0))
    }
}