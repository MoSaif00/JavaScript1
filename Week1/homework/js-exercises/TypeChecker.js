"use strict"
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

if(typeof myName === typeof myProfession){
    console.log("Same Type");
} 
else{
    console.log("Not the same Type");
}

if (typeof myParents === typeof myPets) {
    console.log("Same Type");
}
else {
    console.log("Not the same type");
}

if (typeof myName === typeof myParents) {
    console.log("Same type");
}
else {
    console.log("Not the same type");
}

if (typeof myName === typeof myPets){
    console.log("Same type");
}
else{
    console.log("Not the same type");
}

if (typeof myProfession === typeof myParents) {
    console.log("Same type");
}
else{
    console.log("Not the same type");
}

if (typeof myProfession === typeof myPets) {
    console.log("Same type");
}
else{
    console.log("Not the same type");
}

console.log(typeof myName);
console.log(typeof myParents);

if (typeof myName === typeof myParents) {
    console.log("same type");
} else {
    console.log("Not the same type");
}