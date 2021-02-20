import React from 'react';
import './App.css';
import { lorem } from 'faker';

const sentence = lorem.sentence();

const handleUserInput = (event) => {
  console.log(event.target.value);
};

class App extends React.Component {
  state = {
    correct: false,
  }
  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="box column is-one-third">
            <h1 className="title has-text-centered">Typing challenge</h1>

            <p className="has-text-centered">
              {sentence}
            </p>

            <div className="field">
              <input onInput={handleUserInput} className="input" type="text" />
            </div>

            {this.state.correct ? (<div className="box has-text-centered">
              <h2 className="title">You win</h2>
            </div>) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
