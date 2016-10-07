"use strict"

export const readline = require('readline');
import {rl} from './flashcards.js'
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));


function writeJson(){
  var contents = fs.writeFileSync("data.json", JSON.stringify(data));
}

 export class Question {
  constructor(quest) {
    this.quest = quest;
  }

  addQuest(quest){
    //console.log(data);
    data.push({"definition": "", "term": "asaal"});
    data[data.length-1].definition = quest;


    writeJson()
  }

  addAnswer(answer){
    data[data.length-1].term = answer
    writeJson()
  }
  jalankan (){
    rl.question(`masukkan pertanyaan\n`, (tanya) => {
      this.addQuest(tanya);
        rl.question(`masukkan jawaban\n`, (jawab) => {
          this.addAnswer(jawab);
          rl.question(`input lagi?(y/n)\n`, (lanjut) => {
            if (lanjut === "n") {
              rl.close()
            }else {
              this.jalankan()
            }
            });
        });
    });
  }
}

// var kuis = new Question()
// kuis.jalankan()
// console.log(data);
