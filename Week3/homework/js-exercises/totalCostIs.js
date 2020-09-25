'use strict';

// You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier wants to give you the total price, but the machine is broken! Let's write her a function that does it for her instead!

// Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
// Write a function called calculateTotalPrice
// It takes 1 argument: an object that contains properties that only contain number values
// Loop through the object and add all the number values together
// Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
// Call the function 1 time, giving it the object cartForParty as an argument


const cartForParty = {
    beers : 1.25,
    chips : 1.75,
    energyDrink : 0.75,
    chocolate : 2.55,
    water : 1.10
};

function calculateTotalPrice(cartForParty){
    let totalPrice = 0 ; // set total price to zero 

    for ( let property in cartForParty){
        totalPrice += cartForParty[property] ;
 
    }// Loop through the object and add all the number values together 

    console.log( `Total : €${totalPrice} !`);
}
calculateTotalPrice(cartForParty); // Returns " total : € 7.4"