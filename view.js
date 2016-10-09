"use strict"
const readline = require('readline');
const term = require( 'terminal-kit' ).terminal ;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


import {
  FlashcardController
} from './controller.js';

let controller = new FlashcardController();
// write your code here
export class FlashcardView {
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
    term.green(controller.start());
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
        controller.cek_answer();
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
