"use strict"
// write your code here
const fs = require('fs');
export const question = JSON.parse(fs.readFileSync('./social.json', 'utf8'));
