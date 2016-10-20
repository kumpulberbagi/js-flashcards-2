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
  }


}
