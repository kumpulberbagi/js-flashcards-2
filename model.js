"use strict"
// write your code here
var fs = require('fs');
export const database = JSON.parse(fs.readFileSync('social.json', 'utf8'));
