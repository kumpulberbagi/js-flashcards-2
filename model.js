"use strict"
// write your code here

var jsonfile = require('jsonfile')
var data = []

module.exports = {

  getData: function(value) {
    var read = jsonfile.readFileSync(value)

    for (var i = 0; i < read.length; i++) {
      data.push(read[i])
    }
    return data
  }
}
