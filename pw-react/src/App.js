import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    length: 0,
    includeLetters: false,
    includeNumbers: false,
    includeSymbols: false,
    password: '',
  }

  onChangeLength = (event) => {    
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.setState({length: parsedValue});
    }
  }

  onChangeUseLetters = () => {
    this.setState(({includeLetters}) => ({includeLetters: !includeLetters}));
  }

  onChangeUseNumbers = () => {
    this.setState(({includeNumbers}) => ({includeNumbers: !includeNumbers}));
  }

  onChangeUseSymbols = () => {
    this.setState(({includeSymbols}) => ({includeSymbols: !includeSymbols}));
  }

  onButtonClick = () => {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    const { includeLetters, includeNumbers, includeSymbols, length } = this.state;
    
    let validChars = '';
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeLetters) {
      validChars += letters;
    }
    if (includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.setState({password: generatedPassword});
  }

  render() {
    const { includeLetters, includeNumbers, includeSymbols, length } = this.state;
    return (
<div className="container">
  <div className="columns is-centered">
    <div className="box column is-one-third">
      <h1 className="title has-text-centered">Password Generator</h1>

      <div className="field">
        <label>Length</label>
        <input className="input" onInput={this.onChangeLength} />
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input onChange={this.onChangeUseLetters} type="checkbox" />
            <span> Use Letters</span>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input onChange={this.onChangeUseNumbers} type="checkbox" />
            <span> Use Numbers</span>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input onChange={this.onChangeUseSymbols} type="checkbox" />
            <span> Use Symbols</span>
          </label>
        </div>
      </div>

      <button 
      disabled={!(length && (includeLetters || includeNumbers || includeSymbols))} 
      onClick={this.onButtonClick}
      className="button is-link is-fullwidth">
        Generate!
      </button>

      <div className="box">
        <label>Your Password</label>
        <input className="input"  defaultValue={this.state.password} />
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default App;
