"use strict"
// write your code here

// liblary
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// model
import {database} from "./model";
// view
import {welcome} from "./view";


// logic
var i = 0;
var countBenar = 0;
var countSalah = 0
export function permainan(answer){
  if(i == ( database.length )){
    console.log("Benar : " + countBenar);
    console.log("Salah : " + countSalah);
    rl.close();
  }else{

    rl.question(database[i].definition + " : ", (answer) => {
      if(database[i].term == answer){
        console.log("\n selamat anda benar!");
        i++
        countBenar++
        permainan(answer)
      }else{
        console.log("\n jawaban anda salah! tebak lagi");
        countSalah++
        permainan(answer)
      }

    });
  }
}




//
