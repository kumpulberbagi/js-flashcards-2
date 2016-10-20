"use strict"
// write your code here

// function questions(data){
//   console.log("------",data);
//   // console.log(x[1].definition + "\n");
// }
var termkit = require('terminal-kit')
var term = require('terminal-kit').terminal
var model = require('./model.js')
var figlet = require('figlet')
module.exports = {
  display: function(){
    figlet('Flashcards', function(err, data){
      if(err){
        console.log(err);
      }
      console.log(data);
    });
  },
  questions: function(data, count){
    console.log(model.questions(data, count));
  },
  end: function(count, array, deck){
    console.log("Udah abis!\nDapet contekan dari mana lu");
    console.log(`Anda menebak sebanyak ${count} kali`);
    for (var i = 0; i < model.getData(deck).length; i++){
      console.log(`Anda menebak soal ke-${i+1} sebanyak ${array[i]} kali`);
    }
  }

}
