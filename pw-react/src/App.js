import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    password: '',
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
          <input type="text" />
        </div>
  
        <div>
          <label>Use letters</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Use numbers</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Use symbols</label>
          <input type="checkbox" />
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
