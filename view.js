"use strict"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

import {
  FlashcardController
} from './controller.js';
// write your code here
export class FlashcardView {
  constructor(args = {}) {

  }
  sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 1000) {
        break;
      }
    }
  }
  start() {
    console.log(" ### SELAMAT DATANG DI TAMSYAN FLASHCARD GAME! ### \n");
    this.sleep()
  }
  soal() {
    // rl.setPrompt(`${controller.generate_soal()} > `);
    // rl.prompt();

    if (controller.current_soal < controller.getData().length) {
      rl.question(`${controller.generate_soal()} > `, (answer) => {
        if (controller.cek_input(answer) == true) {
          controller.next_question();
          console.log("\nBenar, sekarang coba jawab soal selanjutnya!\n");
          this.soal();
        } else {
          this.soal();
        }
      })
    } else {
      console.log("Oops, ternyata soalnya udah abis. :grin:");
      rl.close();
    }
  }

}
