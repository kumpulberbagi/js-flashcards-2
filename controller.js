'use strict'
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

import {Model} from './model.js'
var objModel = new Model()
import {Interface} from './view.js'

export class Controller {
    static start_game(count){
    if(count < objModel.json_object.length){
       rl.question(`Definition\n${objModel.json_object[count].definition} `, (answer) => {
        console.log(`\nGuess: ${answer}`);
        if(answer.toLowerCase() === objModel.json_object[count].term.toLowerCase()){
          console.log(`Correct !\n`);
          count++
        return Controller.start_game(count)
        }else{
          console.log(`Incorrect! Try again.\n`);
          return Controller.start_game(count)
        }
      });
    }else{
      rl.close()
    }
  }
}
