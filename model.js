"use strict"
// write your code here
export default class Model {
  constructor() {
    this.fs = require('fs')
    this.name_file = ['social.json','anime.json','sepakbola.json']
    this.data = this.get_file_name()
  }

  get_data()
  {
    return this.data
  }

  get_file_name()
  {
    if (process.argv[2] && this.name_file.indexOf(process.argv[2]) >= 0) {
      return JSON.parse(this.fs.readFileSync(process.argv[2]))
    } else {
      return []
    }
  }
}
