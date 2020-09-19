'use strict';

// Remove a commas from a  string 

/*
- Add the variable to your file.
- Log the length of myString.
- The commas make that the sentence is quite hard to read. Find a 
way to remove the commas from the string and replace them with spaces. 
- After replacing the commas, log myString to see if you succeeded.
*/

// the string needs to be commas removed 
let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString.length);

// logging mystring with replacing comma by space
console.log(myString.replace(/,/g," "));

