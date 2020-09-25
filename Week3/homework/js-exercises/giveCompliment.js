'use strict';

// Start a day with a compliement 
/* 
1 - Write a function named giveCompliment :
- It takes 1 argument: your name
- Inside the function define a variable that holds an array, 
compliments, with 10 strings. Each string should be a compliment, like "great", "awesome"
- Write code that randomly selects a compliment
- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

2- Call the function three times, giving each function call the same argument: your name.
*/


// declare function taking one parameter 
function giveCompliment(name){
    const compliments = [
        'great',
        'Awesome',
        'smart',
        'wonderfull',
        'lovely',
        'amazing',
        'beautiful',
        'Incredible',
        'the best',
        'unique'
    ]

    const dailyCompliment = compliments[Math.floor(Math.random ()* compliments.length)]; // declare varible to that use random method to select from array 

    console.log( `You are ${dailyCompliment}, ${name}` );

}

giveCompliment("Mohammed"); // calling the functtion 
giveCompliment("Mohammed");// calling the functtion 
giveCompliment("Mohammed");// calling the functtion 