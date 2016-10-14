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
// import {View} from "./view";


// setup
var i = 0;
var countBenar = 0;
var countSalah = 0;
var pertanyanSulit = [];

// other function
function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}

function jumlahSalah(temp){
  let count = 1;
  let tampung = [];
  for(let i = 0; i < temp.length; i++){
    if(temp[i] == temp [i + 1]){
      count++
    }else{
      tampung.push(temp[i])
      tampung.push(count)
      count = 1
    }
  }
  return tampung
}

function arrayOfNumber(z){
  let tampungAngka = [];
  for(let x = 0; x < z.length; x++){
    if(typeof(z[x]) == "number"){
        tampungAngka.push(z[x])
    }
  }
  return tampungAngka
}

export function hitung_salah(){
  let tampung = jumlahSalah(pertanyanSulit)
  let count = 1;
  let largest = 0;
  largest = getMaxOfArray(arrayOfNumber(tampung))
  if(tampung[tampung.indexOf(largest) - 1] == undefined){
    return "semua jawaban benar!"
  }else{
    return tampung[tampung.indexOf(largest) - 1]
  }
  return
}

// main funciton
export function permainan(answer){
  if(i == ( database.length )){
    console.log("Benar : " + countBenar);
    console.log("Salah : " + countSalah);
    console.log("pertanyan sulit ditebak : " + hitung_salah());
    rl.close();
  }else{
    rl.question(database[i].definition + " : ", (answer) => {
      if(database[i].term.toLowerCase() == answer){
        console.log("\n-> selamat anda benar!");
        i++
        countBenar++
        permainan(answer)
      }else{
        pertanyanSulit.push(database[i].definition);
        console.log("\n-> jawaban anda salah! tebak lagi");
        countSalah++
        permainan(answer)
      }

    });
  }
}
