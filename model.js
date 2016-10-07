"use strict"
// write your code here
const fs = require('fs');

export class Flashcard {
  constructor(args = {}) {
    this.file = file || social.json;
  }
  static getData() {
    let deck = fs.readFileSync(this.file);
    return JSON.parse(deck);
  }
}
