'use strict';

// write a function that calculates grades, based on the American grading system!
/*
- convert the score into a percentage
- calculate what grade corresponds with that percentage, and
- shows in the command line the result: the grade and the percentage
Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)
*/

// writing function that contains the scores and convert to percentage  which check  the percentage using if-statement then result the grade according to the precentage
function gradeCalculate(scores){
    let grade; // declare undefined grade variable 
    const percentage = Math.floor((scores/100)*100);  // declare percentage variable which use math method to convert the scores into percentage

    // if statement to check what grade corresponds with that percentage
    if( percentage >= 90 && percentage <= 100 ){
        grade = "A";
    }
    else if(percentage >= 80 && percentage < 90){
        grade = "B";
    }
    else if(percentage >= 70 && percentage < 80){
        grade = "C";
    }
    else if(percentage >= 60 && percentage < 70){
        grade = "D";
    }
    else if(percentage >= 50 && percentage < 60){
        grade = "E";
    }
    else if(percentage >= 0 && percentage < 50){
        grade = "F";
    }else
    {
        return " invalid input "; //return value of the function if it is invalid  scores
    }

    return " You got a " + grade + "  ( " + percentage + "% )" ; // return value of the function
}


// trying different of test scores 
console.log(gradeCalculate(90)); 
console.log(gradeCalculate(80));
console.log(gradeCalculate(70));
console.log(gradeCalculate(60));
console.log(gradeCalculate(50));
console.log(gradeCalculate(20)); 
console.log(gradeCalculate(800)); // invalid scores


