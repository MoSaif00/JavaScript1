'use strict ';

// In this project you'll write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.

// Here are the criteria for a valid number:

// Input must be 16 characters
// All characters must be numbers
// At least two different numbers should be represented
// The last number must be even
// The sum of all the numbers must be greater than 16

function validateCreditNumber(cardNumber){
    
    const numberLength = () =>  cardNumber.toString().length; // function to convert numbers to string so we can check the length 

    const notNumber = isNaN() ; // preWritten function to check type of input if it is numbers 

    const sameNumbers=  ()=>{
        let counter = 0;
        let numberString = cardNumber.toString();
        for (let index in numberString) {
            if (numberString[index] == numberString[0]) {
            counter++;
            }
        }
        if (counter == 16) {
            return true;
        }
        return false;
    } // function to check if the contents is same 
    
    const oddNumber = ()=> (cardNumber % 2 == 1) ? true : false ; // function to check if the final number is odd if yes return true 

    const lessThanSixteen = ()=> {
        let sum = 0;
        for(const number of cardNumber){
            sum+=parseInt(number);
        }
        if (sum <= 16) {
          return true;
        }
        return false;
    } // function to check if the sum of all numbers are less than 16   

    // ifelse statmenet to check whether is valid or not according to the written functions 
    return (numberLength(cardNumber)!==16)?  `Invalid Input, The Input ${cardNumber} must be 16 characters length.`
        :  isNaN(cardNumber) ? `Invalid Input, The Input ${cardNumber} must be completely numbers .`
        :  sameNumbers(cardNumber) ? `Invalid Input, The Input ${cardNumber} must have atleast two different numbers.`
        :  oddNumber(cardNumber)? `Invalid Input, The final number of ${cardNumber} must be even .` 
        :  lessThanSixteen(cardNumber) ? `Invalid Input, The sum of all numbers must be greater than 16 as total.`
        :  "Congrats , you have entered a valid card number , Wow " ;

}
console.log(validateCreditNumber('4444444444444'));//  Returns invalid input because the length less than 16 characters .
console.log(validateCreditNumber('a92332119c011112'));//Returns invalid input because all input is not number type
console.log(validateCreditNumber('4444444444444444')); //Returns invalid input because there is not atleasr two different numbers 
console.log(validateCreditNumber('6666666666666663'));//Return invalid input because last number is not even 
console.log(validateCreditNumber('1111111111111100')); // Returns invalid input because the the sum of all numbers are less than 16 .
console.log(validateCreditNumber('9999777788880000')); // valid input
