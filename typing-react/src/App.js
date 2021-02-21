import React from 'react';
import './App.css';
import { lorem } from 'faker';

const sentence = lorem.sentence();

class App extends React.Component {
  state = {
    inputSentence: '',
  }

  handleUserInput = (event) => {
    this.setState({
      inputSentence: event.target.value,
    })
  };

  colorLetters(letter, inputLetter) {
    return inputLetter === letter ? {color: '#55ff55'} : 
    (inputLetter ? {color: '#ff5555'} : {color: 'grey'});
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="box column is-one-third">
            <h1 className="title has-text-centered">Typing challenge</h1>

            <p className="has-text-centered">
              {
                [...sentence].map((letter, i) => 
                <span
                key={i}
                style={this.colorLetters(letter, this.state.inputSentence[i])}>
                {letter}</span>)
              }
            </p>

            <div className="field">
              <input onInput={this.handleUserInput} className="input" type="text" />
            </div>

            <div 
            style={{ display: this.state.inputSentence === sentence ? 'block' : 'none' }} 
            className="box has-text-centered">
              <h2 className="title">You win</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
