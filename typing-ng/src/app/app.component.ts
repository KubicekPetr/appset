import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sentence = lorem.sentence();
  inputSentence = '';

  handleUserInput(value: string) {
    this.inputSentence = value;
  }

  colorLetters(letter, inputLetter) {
    return inputLetter === letter ? '#55ff55' : (inputLetter ? '#ff5555' : 'grey');
  }
}
