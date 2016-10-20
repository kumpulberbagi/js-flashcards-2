"use strict"
// write your code here
module.exports = {

  getData: function(json){
    const fs = require('fs')
    var data = fs.readFileSync(json)
    data = JSON.parse(data)
    return data

  },
  answer: function(data, count){
    return data[count].term
  },
  questions: function(data,count) {
     return data[count].definition;
  }
}
