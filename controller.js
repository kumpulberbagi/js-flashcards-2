"use strict"
import {
  Flashcard
} from "./model.js";
// write your code here
export class FlashcardController {
  constructor(args = {}) {
    this.point = [];
    this.answer = false
    this.current_soal = 0
  }
  getData() {
    return Flashcard.getData();
  }

  generate_soal() {
    let soalsoal = this.getData()
    let soal = soalsoal[this.current_soal]['definition']
    return soal
  }
  cek_input(answer) {
    let jawabjawab = this.getData()
    let jawab = jawabjawab[this.current_soal]['term']
    if (answer == jawab) {
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
  }
  scoring() {
    let result = 0
    for (let i = 0; i < this.point.length; i++) {
      result = result + this.point[i]
    }
    return result
  }

}
to './view.js'
