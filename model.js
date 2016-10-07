"use strict"
// write your code here

export class Model {
  constructor(){
    this.json_file = require('jsonfile')
    this.file = 'social.json'
    this.data_file = this.json_file.readFileSync(this.file)
  }

  // readData(){
  //   return `${typeof this.data_file}`
  // }
}
