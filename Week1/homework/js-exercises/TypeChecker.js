"use strict"

/* 
function takes two values and check whether
its type is same or not 
*/
function typeCheck(value1 , value2){
    if(typeof value1 === typeof value2){
        return "SAME TYPE";
    }
    else{
        return "NOT THE SAME TYPE ";  
    }
}

// declare the values of four variables 
let myName = "Mohammed Saif"; 
let myProfession = "Developer";
let myParents = {
    father : "Abdullah",
    mother : "Wafa'a",
}
let myPets = {
    dog : "Latif",
    cat : "Cashper",
    turtle : "Alexa",
}

// Use the function to check 6 conditional Statements 
console.log(typeCheck(myName,myProfession));
console.log(typeCheck(myName,myParents));
console.log(typeCheck(myProfession,myParents));
console.log(typeCheck(myParents,myPets));
console.log(typeCheck(myPets,myName));
console.log(typeCheck(myPets,myParents));


/*
Write 2 statements to log the type of 
2 variables, each with a different data type
*/
console.log("type of myName variable is ");
console.log(typeof myName);
console.log("type of myPets variable is ");
console.log(typeof myPets);