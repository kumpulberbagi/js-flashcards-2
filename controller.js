"use strict"
// write your code here
const fs = require('fs')
const readline = require('readline')
var view = require('./view.js')
var model = require('./model.js')
var sci = model.getData('science.json')
var soc = model.getData('social.json')

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

class Controller {
  constructor(){
    this.count = 0
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
      console.log("Salah!");
      rl.question("Guess: ", (guess) =>{
        this.check(guess.toLowerCase() == model.answer(deck, this.count).toLowerCase())
      })
    }
    if (x){
      console.log("Benar!\n");
      this.count += 1
      this.loop(this.count)
    }
  }

  // controller.run(count, view.question(sci, count))

  loop(x){
    if (x == deck.length){
      console.log("Udah abis!\nDapet contekan dari mana lu");
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
