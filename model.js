"use strict"
// write your code here
var fs = require('fs');
export const database = JSON.parse(fs.readFileSync('pelajaran.json', 'utf8'));
