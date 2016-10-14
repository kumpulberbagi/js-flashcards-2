"use strict"
// write your code here

import {rl} from './flashcards.js'
import{writeJson,Question,writeUserJson} from './model.js'
import {Game} from './controller.js'

var kuis = new Question()
var pertanyaan = new Game()

rl.question(`ingin jadi pembuat pertanyaan atau ikut kuis?<kuis/tanya>\n  `, (input) => {
    if(input.toLowerCase() === "kuis"){
      rl.question(`pilih quiz\ndata\ndata2\ndata3\n`, (input) => {
      pertanyaan.questRun(input)
    });
  }
    else if(input.toLowerCase() === "tanya") {
      kuis.jalankan()
    }else {
      console.log("anda tidak menginputkan dengan benar");
    }
    });
