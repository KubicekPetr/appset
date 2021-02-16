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
    this.setState({password: 'My password'});
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
