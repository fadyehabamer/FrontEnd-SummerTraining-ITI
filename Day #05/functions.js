// * Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
// * each word of the string in upper case.

function wordCapitalizer(scentence) {
    scentence = scentence.split(" ");
    // console.log(str.length) = 3

    for (var i = 0, word = scentence.length; i < word; i++) {

        scentence[i] = scentence[i][0].toUpperCase() + scentence[i].substr(1);
    }
    console.log(scentence.join(" "));
}
// * ==================================================================================

// * Write a JavaScript function that returns a passed string with letters inalphabetical order
function sort(word) {
    word = word.split("");
    var tempo;

    // * console.log(word[0] > word[1])  f > a ==> True

    for (i = 0; i < word.length; i++) {
        for (j = 0; j < word.length; j++) {

            if (word[j] > word[i]) {
                tempo = word[i];
                word[i] = word[j];
                word[j] = tempo;
            }
        }
    }
    console.log(word.join(""));
}

// * ==================================================================================


// * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let biggest_word = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            biggest_word = wordArray[i]
        }
    }
    console.log(biggest_word)
}

// * ==================================================================================


// * Write a JavaScript function which accept a string as input and swap the case of each character

function switchCase(string) {
    // check if original char is equal to the upper case version
    // if so, make lower case, otherwise, make uppercase
    // ! swapped is better to be string + concat
    var swapped = "";
    for (var i = 0; i < string.length; i++) {
        if (string != " ") {
            //console.log(string[i]);
            //console.log(string[i].toUpperCase());
            if (string[i] == string[i].toUpperCase()) {
                //console.log(string[i].toLowerCase());
                swapped+=string[i].toLowerCase();
                //console.log(string[i]);
            }
            else {
                swapped+=(string[i].toUpperCase());
                //console.log(string[i]);
            }
        }
    }
    console.log(swapped);
}
// * ==================================================================================

// * Write a JavaScript function to extract unique characters from a string

function uniqueCharachters(str) {
    var uniquechars = "";

    for (var i = 0; i < str.length; i++) {
        //  add character if it is not in unique chars string (its index= -1 ) 
        if (uniquechars.indexOf(str.charAt(i)) == -1) {
            uniquechars += str[i];

        }
    }
    console.log(uniquechars);
}
// * ==================================================================================

// * random number between 0 to 9 
function randomVal() {
    console.log(Math.floor(Math.random() * 10));
}
// * ==================================================================================

// * write a JavaScript program to find the area of Circle where the radius is 5
function areaOfCircle(r) {
    console.log(Math.PI * Math.pow(r, 2))
}