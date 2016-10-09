"use strict"
import {
  Flashcard
} from "./model.js";

process.argv.splice(0, 2);
let file = process.argv.splice(0, 1).join("");
let model = new Flashcard({
  'file': file
});

// write your code here
export class FlashcardController {
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
  start() {
    return ` ### SELAMAT DATANG DI TAMSYAN FLASHCARD GAME! ### \n Anda menggunakan deck '${model.file}'\n`;
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
    let result = 0;
    for (let i = 0; i < this.point.length; i++) {
      result += this.point[i]
    }
    return result;
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
