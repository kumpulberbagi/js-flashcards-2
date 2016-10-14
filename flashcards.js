"use strict"
// write your code here
export var fs =require ('fs')
export var contents = fs.readFileSync("data.json");
export var data = JSON.parse(contents);
export var contents2 = fs.readFileSync("data2.json");
export var data2 = JSON.parse(contents2);
export var contents3 = fs.readFileSync("data3.json");
export var data3 = JSON.parse(contents3);


export const readline = require('readline');
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
