"use strict"
// write your code here

export class Model {
  constructor(){
    this.json_file = require('jsonfile')
    this.file
    this.data_file
  }

  setFile(value){
    this.file = value
    this.data_file = this.json_file.readFileSync(this.file)
  }

  // get file(){
  //   return this.file
  // }
  // readData(){
  //   return `${typeof this.data_file}`
  // }
}
