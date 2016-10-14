"use strict"
import View from './view.js'
import Controller from './controller.js'
import Model from './model.js'
var controller = new Controller()


class Flashcards {
  runner()
  {
    var model = new Model()
    if(model.get_file_name().length > 0){
      View.welcome()
      controller.prompt_user()
    }else{
        console.log("No data found!\nList data : {social.json, anime.json, sepakbola.json}");
        controller.rl.close()
    }
  }
}

var flashcards = new Flashcards()
flashcards.runner()
