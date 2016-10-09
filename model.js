"use strict"
// write your code here
const fs = require('fs');

process.argv.splice(0, 2);
let file = process.argv.splice(0, 1).join("");

export class Flashcard {
  constructor(args = {}) {
    this.file = file || "social.json";
  }
  getData() {
    let deck = fs.readFileSync(this.file);
    return JSON.parse(deck);
  }
}
