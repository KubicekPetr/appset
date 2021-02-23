import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    date: '',
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  titlecase = (value) => value.replace(/(^[a-z])|(\s+[a-z])/g, txt => txt.toUpperCase());

  render() {
    return (
      <div className="container">
        <h3>Payment form</h3>
        <div className="row">
          <div className="form-group col">
            <label>Payee name</label>
            <input name="name" className="form-control" onInput={this.onInputChange} />
          </div>

          <div className="col">
            <label><b>Name</b></label>
            <div>{this.titlecase(this.state.name)}</div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label>Payment date</label>
            <input name="date" type="date" className="form-control" onInput={this.onInputChange} />
          </div>

          <div className="col">
            <label><b>Payment date</b></label>
            <div>{this.state.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
