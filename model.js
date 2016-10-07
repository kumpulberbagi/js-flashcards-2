"use strict"
export class Model{
  constructor()
  {
    this.fs = require('fs')
    this.file = 'social.json'
    this.json_data = this.fs.readFileSync(this.file,'utf-8')
    this.json_object = JSON.parse(this.json_data)
  }
}
