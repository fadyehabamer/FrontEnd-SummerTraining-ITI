//  * 3a -  Try to print firstName before the line of the variable definition?
console.log("firstName before declaration => " + firstName)
//  * 3b - undefiend
 

var number1 = 2 ,
    number2 = 2.9 ,
    number3 = 90 , 
    flag = false ,
    firstName = "fady",
    lastName = "amer";
    
console.log("This is the External JavaScript file");    

// * 3d 
firstName[3] = "A"
console.log("after changing char at [3] "+ firstName) 
//  ! because string is immutable