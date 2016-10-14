"use strict"
// write your code here
import {data,data2,data3,rl} from './flashcards.js'
var kumpulanSoal = []
kumpulanSoal.push(data)
kumpulanSoal.push(data2)
kumpulanSoal.push(data3)
export class Game{
  constructor(){
    this.data = kumpulanSoal
    this.numSoal = 0;
    this.count = 0;
  }

  driver(soal){
    for (var i = 0; i < kumpulanSoal.length; i++) {
      if (soal === "data") {
        return kumpulanSoal[0]
      }else if (soal === "data2") {
        return kumpulanSoal[1]
      }else if (soal === "data3") {
        return kumpulanSoal[2]
      }
    }
  }

  questRun(soal){
    if(this.numSoal === this.driver(soal).length){
      console.log(`anda menjawab sebanyak :${this.count}`);
      console.log(`Quiz selesai`);
        rl.close();
      }else{
    rl.question(`${this.driver(soal)[this.numSoal].definition}\n`, (input) => {

        if(input.toLowerCase() === this.driver(soal)[this.numSoal].term.toLowerCase()){
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
// var pertanyaan = new Game()
// pertanyaan.questRun("data")
// console.log(kumpulanSoal[1]);
