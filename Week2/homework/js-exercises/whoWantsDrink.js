'use strict';

// getting drinks for all my 5 friends in the party 
/*
- Declare a variable that holds an empty array, called drinkTray
- There are 3 different types of drinks:
- Create a loop that runs 5 times. On each iteration, push a drink into 
the drinkTray variable. The drinkTray can only hold at most two instances of 
the same drink type, for example it can only hold 2 colas, 2 lemonades, 1 waters.
- If there are already two instances of a drinkType then start with the next drink in the array.
- Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
*/


// declaring empty array and another array holding the drinks 
const drinkTray=[];
const drinkTypes = ['cola', 'lemonade', 'water'];
 
for (let i = 0; i < 5; i++) { // loop to run the 5 times by limiting the tray index by declaring i
    for (let j = 0; j <= 1; j++){ // loop the amount of drink from each
        if (drinkTray.length < 5) { // check whether the tray is only 5 index so it doesn't log one more water
            drinkTray.push(drinkTypes[i]); // push the the drink to the drink tray 
        }  
    }
}
console.log("hey guys I brought a " + drinkTray); // log the drinks



// another way by using math floor method .
/*
for (let i = 0; i < 5; i++) {

    drinkTray.push(drinkTypes[Math.floor(i / 2)]);
}

console.log("hey guys I brought " + drinkTray);
*/