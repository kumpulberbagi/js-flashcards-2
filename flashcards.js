"use strict"
// write your code here

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var jsonfile = require('jsonfile')
var file = "social.json"
var database = jsonfile.readFileSync(file)

class flashcards {
    constructor() {
        this._totalTebak = 0
        this._salah = 0
        this._nilai = 0
        this._jalan = 0
    }

    layout(){
      rl.question('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!',(input)=>{
          if(input == ""){
            this.run()
          }else{
            this.layout()
          }
      })
    }

    run(){
        if (this._jalan == database.length) {
            console.log(`Kamu Menjawab Pertanyaan Sebanyak: ${this._totalTebak}`);
            console.log(`Kamu Menebak Pertanyaan Salah Sebanyak: ${this._salah}`);
            console.log(`Soal Selesai, Nilaimu: ${this._nilai}`);
            rl.close()
        } else {
            console.log(database[this._jalan].definition)
            rl.question("Guess: ", (answer) => {
                if(answer.toLowerCase()==database[this._jalan].term.toLowerCase()){
                  this._totalTebak++
                  this._nilai+=10
                  this._jalan++
                  this.run()
                }else{
                  this._totalTebak++
                  this._salah++
                  console.log("Incorrect! Try again");
                  this.run()
                }
            });
        }
    }
}

var game = new flashcards()
game.repeat()
// process.argv.forEach((input)=>{
//       if(input != "social.json"){
//         console.log("Database Tidak Ada");
//       }else{
//         file = input
//         game.layout()
//       }
// })


/*
1. Sebagai user, saya ingin dapat mengulang kartu yang paling sulit ditebak.
2. Apa yang harus kita lakukan untuk menyimpan jumlah tebakan user untuk setiap kartu?
3. Dapatkah kamu membuat kartu dengan jawaban pilihan berganda?
4. Dapatkah aplikasi kamu memberi nilai jika tebakannya hampir benar?
   Contohnya, jika user menebak dengan benar, tapi salah sebut atau salah ketik.
*/
