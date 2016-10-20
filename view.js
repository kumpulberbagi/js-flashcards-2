"use strict"
// write your code here

// function questions(data){
//   console.log("------",data);
//   // console.log(x[1].definition + "\n");
// }

var model = require('./model.js')
module.exports = {
  display: function(){
    console.log("Welcome to js-flash, which deck would you like to use today?\n");
  },
  questions: function(data, count){
    console.log(model.questions(data, count));
  }


}
