'use strict'

// set the module for running the programs
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let model = require('./model.js')
let questions = model.question
var counter = 0;

class Flashcard {
  static run() {
    rl.question(questions[counter].definition + "\n", (answer) => {
      if (answer.toLowerCase() === questions[counter].term.toLowerCase()) {
        console.log("\nGuess: " + answer + "\n" + "Correct!\n");
        counter += 1;
        if (counter < questions.length) {
          Flashcard.run();
        } else {
          console.log("Complete!");
          rl.close();
        }
      } else {
        console.log("\nGuess: " + answer + "\n" + "Incorect, Try Again\n");
        Flashcard.run();
      }
    });
  }
}

Flashcard.run()
