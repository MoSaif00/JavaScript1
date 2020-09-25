'use strict';

// to know how old your dog is in dog years 
/*
1 - Write a function named calculateDogAge.
- It takes 1 argument: your (fictional) puppy's age (number).
- Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
2 - Call the function three times with different sets of values.
*/

function calculateDogAge(dogAgeHumanYears){
    const dogYears = dogAgeHumanYears * 7;
    
    console.log(`Your doggie is ${dogYears} years old in dog years ! `);
}

calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);