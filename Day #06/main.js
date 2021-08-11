// * Define an array of numbers
var my_array = [1, 4, 5, 2, 34, 11, 90, 22, 3, 11, 1, 4, 100, 9999]

// * dublicates = [11 , 1 , 4 ] 
// * Remove dublicate items from an array

// *using filter
function noDub_filter(array) {
    var filtered = array.filter(function (element, index) {
        return array.indexOf(element) === index;
    });
    // console.log(array.indexOf(1))
    console.log(filtered);
}

//  * using native algo
function noDub_Native(array) {
    var filtered = [];
    for (i = 0; i < array.length; i++) {
        if (filtered.indexOf(array[i]) === -1) {
            filtered.push(array[i]);
        }
    }
    console.log(filtered);
}

// * sort ascending
function sort_Ascending(array) {
    // 
    console.log(array.sort(function (a, b) {
        return a - b
    }));
}

function Ascend_sort_native(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (array[j] > array[i]) {
                tempo = array[i];
                array[i] = array[j];
                array[j] = tempo;
            }
        }
    }
    console.log(array)
}

// * sort descinding
function sort_descinding(array) {
    console.log(array.sort(function (a, b) {
        // 😅😄
        return b - a
    }));
}


function Descend_sort_native(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (array[j] < array[i]) {
                tempo = array[i];
                array[i] = array[j];
                array[j] = tempo;
            }
        }
    }
    console.log(array)
}



// * filter numbers lessthan 50
// * using filter
function less_fifty_filter(array) {
    console.log(array.filter(function (element, index) {
        return array[index] < 50
    }))
}

// * native
function less_fifty_native(array) {
    var small_fifty = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 50) {
            small_fifty.push(array[i])
        }
    }
    console.log(small_fifty)
}

// * Display Min , MAX numbers
// * native

function min_max_native(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (array[j] > array[i]) {
                tempo = array[i];
                array[i] = array[j];
                array[j] = tempo;
            }
        }
    }
    console.log("MIN VALUE :  " + array[0], "   MAX VALUE :  " + array[array.length - 1])
}

function min_max_native_2(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    console.log("MAX NUM IS  " + max);

    var min = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    console.log("MIN NUM IS  " + min);
}


// * using min , max
function min_max(array) {
    console.log("MAX is :  " + Math.max.apply(Math, my_array) + "   Min is :  " + Math.min.apply(Math, my_array))
    console.log()
}

// * function to Compute the sum and product of an array of integers (Use eval)
function sumAll(op, array) {
    console.log("SUM OF ARRAY IS : " + eval(my_array.join(op)));

}
//op first inout
// array secno
function sumAll() {
    //arguments
    // ! ??????????????????
}

// * get Month name from date
function monthName(mydate) {
    var month =
        [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ]
    var m_name = month[mydate.getMonth()];
    console.log(m_name)
}

