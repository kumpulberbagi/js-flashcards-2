"use strict"
// write your code here
import {Model} from "./model.js"
import {Interface} from "./view.js"

export class Controller {
  constructor(){
    this.readline = require('readline')

    this.rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    this.data = new Model()

    this.countAnswer = 0

    this.resultCount = []
  }

  askQuestion(counter){
    // console.log(this.data.data_file.length);
    // if(counter === 0){
    //   Interface.welcome()
    // }
    // TODO: yang belom nih ku, counter ketika jawaban per pertanyaan untuk validasi welcome, cek soal tersulit

    if(counter < this.data.data_file.length){
      this.countAnswer = 0
      this.rl.question(`Definition\n${this.data.data_file[counter].definition} `, (answer) => {
        this.countAnswer++

        answer = answer.toLowerCase()

        Interface.guessAnswer(answer)


        if(answer === this.data.data_file[counter].term.toLowerCase()){
          this.resultCount.push(this.countAnswer)
          Interface.guessAnswerTrue()
          counter++
          this.askQuestion(counter)
        }else{
          Interface.guessAnswerFalse()
          this.askQuestion(counter)
        }
      });
    }else{
      // console.log(this.resultCount);
      this.hardestQuestion(this.resultCount)
      this.rl.close()
    }
  }

  hardestQuestion(arr){
    console.log(arr);
    // console.log(`${Math.max(arr)}`)
  }
}
