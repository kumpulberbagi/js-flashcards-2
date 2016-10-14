"use strict"
// write your code here

export class Interface {
  constructor(){

  }

  static welcome(card){
    console.log(`Welcome to JS Flash Cards. You're using the deck '${card}'`);
    console.log(`To play, just enter the correct term for each definition. Read? GO !\n`)
  }

  static guessAnswer(answer){
    console.log(`\nGuess: ${answer}`);
  }

  static guessAnswerTrue(){
    console.log(`Correct !\n`);
  }

  static guessAnswerFalse(){
    console.log(`Incorrect! Try again.\n`);
  }
}
