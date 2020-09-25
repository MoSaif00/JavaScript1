'use strict';

//Be your own fortune teller
/*
1 - Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
2 - Write a function named tellFortune.
- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
- Randomly select values from the arrays.
- Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
3 - Call the function 3 times, by passing the arrays as the argument.
*/

 const numChildren = [ 1, 2, 3, 4, 5];
 const partnerNames = [
     'Salwa',
     'Sam',
     'Alixa',
     'Tong',
     'Roshan'
 ];
 const locations =[
     'Amsterdam',
     'Dubai',
     'NewYork',
     'Paris',
     'Cairo'
 ];
 const jobs = [
     'Web developer ',
     'Software Engineer',
     'Manager',
     'Influncer',
     'Pilot'
 ]

 function tellFortune(){
     const randomNumChildren = numChildren[Math.floor(Math.random() * numChildren.length)];
     const randomPartnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
     const randomLocation = locations[Math.floor(Math.random() * locations.length)];
     const randomJobs = jobs[Math.floor(Math.random() * jobs.length)];

     const plural = randomNumChildren >= 2 ? "s" : " " ; // to pluralize when the number of kids are more than one 

     console.log(`You will be a ${randomJobs} in ${randomLocation}, married to ${randomPartnerName} with ${randomNumChildren} Kid${plural}.`);
 }

 tellFortune(numChildren, partnerNames, locations, jobs);
