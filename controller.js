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

  askCard(){
    let argv = process.argv

    if (typeof argv[2] === "undefined") {
      // printHelp()
      this.data.setFile('social.json')
      console.log(`You don't insert card's file name. Default's Card is social.json!`);
    }else{
      if(/.json?/.test(argv[2])){
        this.data.setFile(argv[2])
        // console.log(this.data.file);
        Interface.welcome(this.data.file)
      }
    }

    // argv.forEach((val, index) => {
    //   // console.log(`${index}: ${val}`);
    //
    // });
    // this.rl.close()
  }

  askQuestion(counter){
    // console.log(this.data.data_file.length);
    // if(counter === 0){
    //   Interface.welcome()
    // }
    // TODO: yang belom nih ku, counter ketika jawaban per pertanyaan untuk validasi welcome, cek soal tersulit

    if(counter < this.data.data_file.length){
      this.rl.question(`Definition\n${this.data.data_file[counter].definition} `, (answer) => {
        this.countAnswer++

        answer = answer.toLowerCase()

        Interface.guessAnswer(answer)

        if(answer === this.data.data_file[counter].term.toLowerCase()){
          this.resultCount.push(this.countAnswer)
          this.countAnswer = 0
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
    // console.log(Math.max(1,2));
    // console.log(arr);
    let max = arr[0]
    let indexMax = 0
    for(var i = 1 ; i < arr.length ; i++){
      if(max < arr[i]){
        max = arr[i]
        indexMax = i
      }
    }
    // console.log(max);
    // console.log(arr);
    if(max > 1){
      console.log(`Pertanyaan tersusah adalah : ${this.data.data_file[indexMax].definition}`);
    }else{
      console.log(`Tidak ada pertanyaan tersusah`);
    }
  }
}
