"use strict"
// write your code here
var fs =require ('fs')
var contents = fs.readFileSync("social.json");
var data = JSON.parse(contents);


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function writeJson(){
  var write = fs.writeFileSync("data.json", JSON.stringify(data));
}
//
class Question {
  constructor(quest) {
    this.quest = quest;
  }

  addQuest(quest){
    var input = data[data.length-1].definition;
    input = quest;
    data.push({"definition": input, "term": "asaal"});
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
var test = new Question();

test.jalankan()
