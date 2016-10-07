"use strict"
// write your code here

import {rl} from './flashcards.js'
import{writeJson,Question} from './model.js'
import {Game} from './controller.js'

var kuis = new Question()
var pertanyaan = new Game()

rl.question(`ingin jadi pembuat pertanyaan atau ikut kuis?<kuis/tanya>\n  `, (input) => {

    if(input.toLowerCase() === "kuis"){
      pertanyaan.driver()
    }
    else if(input.toLowerCase() === "tanya") {
      kuis.jalankan()
    }else {
      console.log("anda tidak menginputkan dengan benar");
    }
    });
