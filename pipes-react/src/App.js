import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    date: '',
    amount: '',
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  titlecase = (value) => value.replace(/(^[a-z])|(\s+[a-z])/g, txt => txt.toUpperCase());

  currency = (value, currencyCode) => {
    if (value) {
      switch (currencyCode) {
        case 'CZK': 
          return currencyCode + value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '.00';
      }
    }
    return value;
  }

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

        <div className="row">
          <div className="form-group col">
            <label>Payment amount</label>
            <input name="amount" className="form-control" onInput={this.onInputChange} />
          </div>
          <div className="col">
            <label><b>Payment amount</b></label>
            <div>{this.currency(this.state.amount, 'CZK')}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
