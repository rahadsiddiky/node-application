/**
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Rahad Siddiky
 * Date: 06/08/2022
 */

// Dependencies
const mathLibrary = require('math');
const quotesLibrary = require('quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes : 1000
}