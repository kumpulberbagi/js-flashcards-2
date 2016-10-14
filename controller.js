"use strict"

// write your code here
import View from './view.js'
var model = require("./model.js")
var jsonfile = require('jsonfile')
var file = ''
var argv = process.argv

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var tebakan = 0
var result = []

argv.forEach((val, index) => {
  file = val
})

jsonfile.readFile(file, function(err, obj) {
  if (typeof obj == "undefined") {
    console.log("file tidak ada");
  }
  else {
    var data = model.getData(file)
    View.welcome()
    let soal = (nomor,index,stats) => {
      result[nomor] = tebakan
      if(nomor<index) {
        if(stats == 0) {
          tebakan = 0
          console.log(data[nomor].definition);
        }

        rl.question("Guess: ", (answer) => {

          while (answer != data[nomor].term.toLowerCase()) {
            console.log("Incorrect! try again.");
            tebakan +=1
            return soal(nomor, index, 1)
          }

          tebakan +=1
          result[nomor] = tebakan

          if(nomor>=index-1) {
            var maxVal = 0
            var same = 0
            var total = 0
            for (var i = 0; i < result.length; i++) {
              if(maxVal < result[i]) {
                maxVal = result[i]
              }
              else {
                maxVal = maxVal
              }

              if (result[0] == result[i]) {
                same++
              }
            }

            if (same != data.length) {
              for (var i = 0; i < result.length; i++) {          
                if(result[i] == maxVal) {
                  console.log(`Soal yang paling sulit di tebak ada lah:`);
                  console.log(data[i].definition);
                }
                total += result[i]
              }
            }

            console.log(`Total tebakan anda adalah ${total}`);
            rl.close()
          }

          return soal(nomor+1, index,0)
        });
      }
    }
    soal(0,data.length,0)
  }

})
