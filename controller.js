"use strict"

// write your code here
var view = require("./view.js")
var model = require("./model.js")
var jsonfile = require('jsonfile')
var file = ''
var argv = process.argv

argv.forEach((val, index) => {
  file = val
})

jsonfile.readFile(file, function(err, obj) {
  if (typeof obj == "undefined") {
    console.log("file tidak ada");
  }
  else {
    view.getView(model.getData(file))
  }

})
