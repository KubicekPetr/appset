import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
  }

  onNameChange = ({ target: { value } }) => {
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>Payee name</label>
          <input onInput={this.onNameChange} />
        </div>

        {this.state.name}
      </div>
    );
  }
}

export default App;
