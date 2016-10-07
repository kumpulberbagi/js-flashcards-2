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

class Game{
  constructor(){
    this.data = data
    this.numSoal = 0;
    this.count = 0;
  }

  driver(){
    if(this.numSoal === this.data.length){
      console.log(`anda menjawab sebanyak :${this.count}`);
      console.log(`Quiz selesai`);
        rl.close();
      }else{
    rl.question(`${this.data[this.numSoal].definition}\n`, (input) => {

        if(input.toLowerCase() === this.data[this.numSoal].term.toLowerCase()){
          console.log(`Jawaban benar`);
          this.numSoal += 1
          this.count +=1
          this.driver()
          }else{
            console.log(`Jawaban Salah`);
            this.driver()
            this.count+=1
          }
        });
      }
  }
}

var tanya = new Game()
tanya.driver()
