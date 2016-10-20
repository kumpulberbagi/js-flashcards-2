"use strict"
// write your code here
const fs = require('fs')
const readline = require('readline')
var view = require('./view.js')
var model = require('./model.js')
var sci = model.getData('science.json')
var soc = model.getData('social.json')
var termkit = require('terminal-kit')
var term = require('terminal-kit').terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



view.display()
process.argv.splice(0,2)
var arg = process.argv.splice(0,1).join('')
switch(arg){
  case "social":
    console.log("Using social.json deck\n");
    break;
  case "science":
    console.log("Using science.json deck\n");
    break;
  default:
    console.log("Invalid deck!");;
}
var deck = ''
if (arg == 'science'){
  deck = sci
}else if(arg == 'social'){
  deck = soc
}
var deckname = ''
if (arg == 'science'){
  deckname = 'science.json'
}else if (arg == 'social'){
  deckname = 'social.json'
}
class Controller {
  constructor(){
    this.count = 0
    this.counter = 0
    this.guesses = []
    this.guess = 1
  }
  start(){
    rl.question("Welcome to js-flash, type go to play\n", (input) =>{
      if (input.toLowerCase() !== "go"){
        console.log("Can't follow simple instructions, can you? :poop:");
        rl.close();
      }
      else{
        this.loop(this.count)
      }
})

  }
  check(x){
    if (x == false){
      term.red('Salah!\n');
      this.counter +=1
      this.guess += 1
      rl.question("Guess: ", (guess) =>{
        this.check(guess.toLowerCase() == model.answer(deck, this.count).toLowerCase())
      })
    }
    if (x){
      term.blue('Benar!\n');
      this.count += 1
      this.counter += 1
      this.guesses.push(this.guess)
      this.guess = 1
      this.loop(this.count)
    }
  }

  // controller.run(count, view.question(sci, count))

  loop(x){
    if (x == deck.length){
      view.end(this.counter, this.guesses, deckname)
      rl.close()
    }
    else{
        view.questions(deck, this.count)
        rl.question("Guess: ", (guess) =>{
          this.check(guess.toLowerCase() == model.answer(deck, this.count).toLowerCase())
        })
    }
  }
}

let controller = new Controller

controller.start()



// getData('science.json')
