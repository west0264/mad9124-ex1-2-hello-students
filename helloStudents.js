'use strict'

// 1. Read the JSON file into a variable called students

const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console

function say(message) {
    console.log(message)
};


let counter = 0;

students.forEach(student => {
    const firstName = student.firstName; 
    const lastName = student.lastName; 
    say(`Hello ${firstName} ${lastName}`);
    if (lastName.charAt(0) == "D") {
        counter += 1;
    } 
}); 


// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
say("Count of last names starting with D is" + " " + counter);

// e.g. Count of last names starting with D is 1

