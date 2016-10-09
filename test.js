"use strict"
const fs = require('fs');
const readline = require('readline');
const term = require( 'terminal-kit' ).terminal ;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Flashcard {
  constructor(args = {}) {
    this.file = file || "social.json";
  }
  getData() {
    let deck = fs.readFileSync(this.file);
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args = {}) {
    this.point = [];
    this.answer = false
    this.current_soal = 0
    this.guess = 0
    this.save = []
    this.max_guess = 0
  }
  getData() {
    return model.getData();
  }

  generate_soal() {
    let soalsoal = this.getData()
    let soal = soalsoal[this.current_soal]['definition']
    return soal
  }
  cek_input(answer) {
    let jawabjawab = this.getData()
    let jawab = jawabjawab[this.current_soal]['term']
    this.guess += 1
    if (answer.toLowerCase() == jawab.toLowerCase()) {
      this.answer = true
      return true
    } else {
      this.answer = false
      return false
    }
  }

  cek_answer() {
    if (this.answer = true) {
      this.point.push(4)
    } else {
      this.point.push(-1)
    }
    return this.point
  }

  next_question() {
    this.current_soal += 1
    this.guess = 0
  }

  scoring() {
    let result = 0
    for (let i = 0; i < this.point.length; i++) {
      result = result + this.point[i]
    }
    return result
  }
  guess_count() {
    return this.guess
  }
  save_guess() {
    this.save.push(this.guess)
    return this.save
  }
  tersulit() {
    for (var i = 0; i < this.save.length; i++) {
      if (this.save[i] > this.max_guess) {
        this.max_guess = this.save[i]
      }
    }
    // console.log(this.max_guess)
    return this.max_guess;
  }
  yg_tersulit() {
    let arrMax = []
    let soalsoal = this.getData()
    for (var i = 0; i < this.save.length; i++) {
      if (this.tersulit() === this.save[i]) {
        arrMax.push(soalsoal[i].definition)
      }
    }
    return arrMax;
  }
}

class FlashcardView {
  constructor(args = {}) {}
  sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 1000) {
        break;
      }
    }
  }
  start() {
    term.green(` ### SELAMAT DATANG DI TAMSYAN FLASHCARD GAME! ### \n Anda menggunakan deck '${model.file}'\n`);
    this.sleep()
  }
  soal() {
    // rl.setPrompt(`${controller.generate_soal()} > `);
    // rl.prompt();
    if (controller.current_soal < controller.getData().length) {
      rl.question(`\n${controller.generate_soal()} > `, (answer) => {
        if (controller.cek_input(answer) == true) {
          term.yellow(`kamu telah menebak ${controller.guess_count()} kali`);
          term.green("\nBenar, sekarang coba jawab soal selanjutnya!\n");
          controller.save_guess();
          controller.next_question();
          this.soal();
        } else {
          term.yellow(`kamu telah menebak ${controller.guess_count()} kali\n`);
          term.red("Sayang nya tebakanmu belum tepat, coba lagi!\n")
          this.soal();
        }
      })
    } else {
      console.log("Oops, ternyata soalnya udah abis. :grin:");
      if (controller.tersulit() === 1) {
        term.blue("Luar biasa, kamu menjawab semua soal dengan benar dalam sekali tebak!\n");
      } else {
        term.red(`\nSoal yang paling sulit untukmu adalah : \n * ${controller.yg_tersulit().join("\n * ")}\n`);
      }
      rl.close();
    }
  }

}

process.argv.splice(0, 2);
let file = process.argv.splice(0, 1).join("");
let model = new Flashcard({
  'file': file
});
let controller = new FlashcardController;
let view = new FlashcardView;
view.start();
view.soal();
