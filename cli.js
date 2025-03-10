#!/usr/bin/env node
var greeting = require('./main');
console.log("Greeting: " + greeting[process.argv[2]]);