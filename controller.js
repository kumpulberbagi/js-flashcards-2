"use strict"
import Model from './model.js'
export default class Controller {
  constructor() {
    this.count = 0
    this.readline = require('readline');
    this.rl = this.readline.createInterface(process.stdin, process.stdout);
    this.model = new Model()
    this.data = this.model.get_data()
    this.tampung_data = []
    this.total_tebakan = 0
    this.tampung_soal_benar = []
    this.count_individual = 1
    this.tampung_individual = []
    this.tampung_angka = []
    this.max = 0
  }

  callPrompt()
  {
    if(this.count === 0){
      for(var i=0;i<this.model.name_file.length;i++){
      this.tampung_data.push(this.model.name_file[i])
    }
    if(typeof process.argv[2] == 'undefined'){
      console.log(`Your data: ${this.tampung_data}`);
    }
      console.log(`Your data : ${this.tampung_data}\n`);
      console.log(`Welcome to JS Flash Cards. You are using the deck '${process.argv[2]}'\nTo play`,` just enter the correct term for each definition. Ready? Go!\n`)
    }
    this.rl.setPrompt(this.data[this.count].definition);
    this.rl.prompt();
  }

  prompt_user()
  {
    var obj = this
    this.callPrompt()
    this.rl.on('line', function(input) {
        if (input.toLowerCase() === obj.data[obj.count].term.toLowerCase()){
          console.log(`Guess: ${input}`);
          console.log(`Correct!`);
          obj.tampung_soal_benar.push(obj.data[obj.count].definition)
          obj.total_tebakan++
          obj.count++
          if(input.toLowerCase() === obj.data[obj.data.length-1].term.toLowerCase()){
            console.log('Congratulations!!\n');
            console.log(`Total tebakan ${obj.total_tebakan}\n`);
            for(var i=0;i<obj.tampung_soal_benar.length;i++)
            {
              if(obj.tampung_soal_benar[i] == obj.tampung_soal_benar[i+1])
              {
                obj.count_individual++
              }else{
                obj.tampung_individual.push("Soal : "+obj.tampung_soal_benar[i],"Jumlah tebakan : "+obj.count_individual)
                obj.tampung_angka.push(obj.count_individual)
                obj.count_individual = 1
              }
            }

          obj.max = Math.max.apply(null,obj.tampung_angka)
          console.log(obj.tampung_individual.join('\n'));
          console.log(`\nSoal yang paling sulit ditebak adalah soal dengan jumlah tebakan ${obj.max}`);
          obj.rl.close()
          }
          return obj.callPrompt()
        }
        obj.tampung_soal_benar.push(obj.data[obj.count].definition)
        console.log(`Guess: ${input}`);
        console.log(`Incorrect!`);
        obj.rl.prompt()
    }).on('close',function(){
        process.exit(0);
    });
  }
}
