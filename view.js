"use strict"
// write your code here
// var model = require("./model.js")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var tebakan = 0

module.exports = {
  getView: function (data) {
    let soal = (nomor,index,stats) => {
      if(nomor<index) {
        if(stats == 0) {
          console.log(data[nomor].definition);
        }

        rl.question("Guess: ", (answer) => {
          while (answer != data[nomor].term.toLowerCase()) {
            console.log("Incorrect! try again.");
            tebakan +=1
            return soal(nomor, index, 1)
          }

          if(nomor>=index-1) {
            console.log(`Total tebakan anda: ${tebakan}`);
            rl.close()
          }
          tebakan +=1
          return soal(nomor+1, index,0)
        });
      }
    }
    console.log("Welcome to JS Flash Cards. To play, just enter the corret term for each definition. Ready? Go!");
    soal(0,data.length,0)
  }
}
