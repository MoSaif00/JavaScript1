'use strict';
const firstArray = ["hello", 222, false, {name:"mohammed"}];
const secondArray = ["hi" , "hello", {name:"saif"}, true, 2232, false, 1212]

console.log("first array length is : ");
console.log(firstArray.length);
console.log("Second array length is : ");
console.log(secondArray.length);

if(firstArray.length == secondArray.length) {
    console.log("they are the same length ");
}
else{
    console.log("they are not the same length");
}