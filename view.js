"use strict"
// write your code here

export class Interface {
  constructor(){

  }

  static welcome(){
    console.log(`Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Read? GO !\n`)
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
