/**
 * Title: Quotes Library.
 * Description: Utility library for getting a list of quotes.
 * Author: Rahad Siddiky
 * Date: 06/08/2022
 */


// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayQuotes;
};

// Export the library
module.exports = quotes;