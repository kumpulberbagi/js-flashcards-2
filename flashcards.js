"use strict"
// write your code here
export var fs =require ('fs')
export var contents = fs.readFileSync("data.json");
export var data = JSON.parse(contents);


export const readline = require('readline');
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
