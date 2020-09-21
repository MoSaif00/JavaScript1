'use strict';

// list to Keep track of which books you read and which books you want to read!

/*
- Declare a variable that holds an array of 3 objects, where each object describes a book and has properties
 for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
- Loop through the array of books.
- For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
- Create a conditional statement to change the log depending on whether you read it yet or not
- if you read it, log a string like You already read "The Hobbit" right after the log of the book details
- If you haven't read it log a string like You still need to read "The Lord of the Rings"
*/


// Decalring array of 3 objects contains my books 
const myBooks = [
    {
        title: "The monk who sold his ferari",
        author: "Robin Sharma",
        alreadyRead: true,
    },

    {
        title: "The 5Am Club",
        author: "Robin Sharma",
        alreadyRead: false,
    },

    {
        title: "Crushing it",
        author: " Gary Vee",
        alreadyRead: true,
    }
];

// looping through the array of books 
for ( let i = 0 ; i < myBooks.length ; i++ ){
    console.log(myBooks[i]);
}


// loging the book title and author 
for ( const book of myBooks ){
    console.log(book["title"] + " By " + book["author"]);
}

// loging the books according to the books i alread read or not 
for ( const book of myBooks){
    if(book.alreadyRead === true ){
        console.log("You have already read " , book["title"]);
    }
    else
    {
        console.log("You still need to read ", book.title);
    }
}