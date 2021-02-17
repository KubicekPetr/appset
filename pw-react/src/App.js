import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    length: 1,
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
    return (
      <div className="App">
        <h1>Password generator</h1>
  
        <div>
          <label>Enter length</label>
          <input onInput={this.onChangeLength} type="text" />
        </div>
  
        <div>
          <label>Use letters</label>
          <input onChange={this.onChangeUseLetters} type="checkbox" />
        </div>
        <div>
          <label>Use numbers</label>
          <input onChange={this.onChangeUseNumbers} type="checkbox" />
        </div>
        <div>
          <label>Use symbols</label>
          <input onChange={this.onChangeUseSymbols} type="checkbox" />
        </div>
  
        <div>
          <button onClick={this.onButtonClick}>Generate</button>
        </div>
  
        <div>
          <label>Your password</label>
          <input defaultValue={this.state.password} type="text" />
        </div>
      </div>
    );
  }
}

export default App;
