"use strict"
// write your code here
import {
  FlashcardView
} from "./view.js";
import {
  FlashcardController
} from "./controller.js";

let controller = new FlashcardController();
let view = new FlashcardView();

view.start();
for (var i = 0; i < Flashcard.getData().length; i++) {
  view.soal();
}


process.argv((file) => {
  let model = new Flashcard({
    'file': file
  });
  console.log(model);
})
