"use strict"
// write your code here

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var i = 0
var argv = process.argv
var selected = argv[2]
var ask = `Silahkan masukkan pertanyaan :\n`
var answer = `Silahkan masukkan Jawaban :\n`
var again = `ATTENTION !!!! ======================= Mau lanjut buat pertanyaan atau save? \n(lanjut/save)==============================================================\n`
var pilihNama = `Silahkan masukan namafile dan sertakan '.json' dibelakangnya.\nJangan menggunakan spasi ! contoh : social.json\n`

var source = []
var pertanyaan =""
var jawaban =""
var write, fl

class Question{
  constructor(property){
    this.definition = property['definition']
    this.term = property['term']
  }
}
function quiz (){
  if(i>content.length-1){
    console.log(`Quiz selesai !`);
    process.exit[0]
    rl.close()
  }else{
    rl.question(content[i].definition,function(input){
      if (input.toLowerCase() == content[i].term.toLowerCase()) {
        i++
        quiz()
      }else{
        console.log(`Jawaban salah`);
        quiz()
      }
    })
  }
}

function newDeck(){
  rl.question(ask, function(input){
    if(input.length<5){
      newDeck()
    }else{
      console.log(`question saved`);
      pertanyaan = input
      rl.question(answer, function(input){
        if(input != null && input !=""){
          jawaban = input
          source.push(new Question({definition:pertanyaan, term:jawaban}))
          console.log(source);
          rl.question(again, function(input){
            if(input =='lanjut'){
              newDeck()
            }else if(input =='save'){
              console.log(`WARNING ||| TYPO IN THIS STATE WILL CAUSE YOUR CUSTOM DECK GONE\nPLEASE TYPING WITH CAUTIONS\n`);
              console.log(`Please press enter to continue`);
              rl.on('line', function(input){
                rl.setPrompt(pilihNama)
                rl.prompt()
                fl = input
                if(input != null && input !=""){
                  saveQuestion()
                  console.log(`your new deck now can be used in quiz mode`);
                  console.log(`Question saved in ${input}`);
                  process.exit[0]
                  rl.close()
                }else{
                  console.log(`TYPO DETECTED. YOUR CUSTOM DECK HAS BEEN DELETED. EXIT QUIZ.`);
                  process.exit[0]
                  rl.close()
                }
                })
            }else{
              console.log(`jawaban tidak dikenal, restarting.....`);
              pertanyaan =""
              jawaban =""
              source =[]
              newDeck()
            }
          })
        }else{
          console.log(`Failed to saved, restarting.....`);
          pertanyaan =""
          newDeck()
        }
      })
    }
  })
}

function saveQuestion(){
   write = JSON.stringify(source)
  fs.writeFile(fl, write,'utf8')
}

function driver(){
var welcome = `Selamat datang di quiz-cli !\nketik 'quiz' untuk ikut quiz atau 'create' untuk buat pertanyaan!\n(quiz/create)\n`

rl.question(welcome, function(input){
  if(input =='quiz'){
    console.log(`Silahkan ketik node<spasi>controller.js<spasi>deck`);
    console.log(`Deck default : \n1. social.json\n2. math.json`);
    process.exit[0]
    rl.close()
  }else if(input =='create'){
    newDeck()
  }else{
    console.log(`input tidak dikenal. restarting...`);
    driver()
  }
})
}

if(argv[2] != null && argv[2] !=""){
  var deck = fs.readFileSync(selected)
  var content = JSON.parse(deck)
  quiz()
}else{
  driver()
}
